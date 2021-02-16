import { Alert } from 'react-native';
import { takeLatest, put, select, call, delay, race, take, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { types } from '../../Types/get_user_conversations';
import { getconversationAPI, addFeedbackForConversationApi } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';
import Toast from 'react-native-simple-toast';
import io from "socket.io-client";
import { errorMessage } from "../../errorHandling";
import { allRoomsList, selectUserConversations } from "../../Selectors";

function* getUserConversations(action) {
  try {
    const result = yield getconversationAPI(action.payload.userId);
    if (result.status === 200) {
      yield put({ type: types.GET_USER_CONVERSATION_SUCCESS, payload: result.message });
      let roomsList = yield select(allRoomsList);
      yield joinAllRooms(roomsList);
    }
    else {
      yield put({ type: types.GET_USER_CONVERSATION_FAILURE, payload: result.message });
      Alert.alert("Internet Connection Issue")
    }
  } catch (error) {
    yield put({ type: types.GET_USER_CONVERSATION_FAILURE, payload: error });
    Alert.alert("Internet Connection Issue")
  }
}

function* selectConversation(action) {
  try {
    yield put({ type: types.ADD_CURRENT_CONVERSATION_ID, payload: action.payload });
  } catch (error) {
    let message = yield errorMessage(error);
    Toast.show(message);

  }
}

function* sendMessage(action) {
  try {
    yield addMessageToConversation(action.payload);
    if (socket) {
      socket.emit("message", action.payload);
    } else {
      Toast.show('Failed to send message');
    }
  } catch (error) {
    let message = yield errorMessage(error);
    Toast.show(message);

  }
}

function* joinAllRooms(roomsList) {
  socket.emit("join", roomsList);
  return new Promise((resolve) => {
    socket.on("room-joined", () => {
      resolve();
    })
  })
}
const connect = () => {
  socket = io("https://kd-foundation.herokuapp.com", { transports: ['websocket'], upgrade: false, });
  return new Promise((resolve) => {
    resolve(socket);
  });
};
function* initalizeSocketService() {
  try {
    const { socket, timeout } = yield race({
      socket: call(connect),
      timeout: delay(60000),
    });
    if (timeout) {
      Toast.show('Failed to Connect With Server');

      return;
    }
    const socketChannel = yield call(createSocketChannel, socket);
    while (true) {
      const payload = yield take(socketChannel);
      const event = payload.event;
      const data = payload.data;
      switch (event) {
        case "ADD_MESSAGE":
          yield addMessageToConversation(data);
          break;

        default:
          break;
      }
    }
  } catch (error) {
    Toast.show('Socket Error');

  }
}
function* addMessageToConversation(message) {
  //todo fix issue to get array instead of object
  const user_conversation = yield select(selectUserConversations);
  let newConversations = [...user_conversation];
  let index = user_conversation.findIndex((user_conversation) => user_conversation._id === message.conversationId);
  let newMessages = [...user_conversation[index].messages, message];
  newConversations[index].messages = newMessages;
  yield put({ type: types.ADD_MESSAGE, payload: newConversations });
}
const createSocketChannel = (socket) => eventChannel((emit) => {

  socket.on('message-response', (data) => {
    emit({ event: "ADD_MESSAGE", data });
  });
  return () => {
    socket.off('leave-room', (data) => {
      emit(data);
    });
  };
});
function* addFeedbackForConversation(action) {
  try {
    const response = yield addFeedbackForConversationApi(action.payload);
    if (response.status >= 200 && response.status < 300) {
      NavigationService.navigate('ChatMain');
      Toast.show('Thanks For Feadback');
    } else {
      yield put({ type: types.ADD_FEEDBACK_CONVERSATION_FAILED });
    }
  } catch (error) {
    yield put({ type: types.ADD_FEEDBACK_CONVERSATION_FAILED });
  }
}
export function* getUserConversationsWatcher() {
  yield takeLatest(types.GET_USER_CONVERSATION_REQUEST, getUserConversations);
  yield takeLatest(types.SELECT_CONVERSATION, selectConversation);
  yield takeLatest(types.INIT_SOCKET_SERVICE, initalizeSocketService);
  yield takeEvery(types.SEND_MESSAGE, sendMessage);
  yield takeLatest(types.ADD_FEEDBACK_CONVERSATION, addFeedbackForConversation);

}