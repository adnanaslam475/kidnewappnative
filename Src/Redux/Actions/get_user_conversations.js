import { types } from "../Types/get_user_conversations";

export function getUserConversations(user) {
  return {
    type: types.GET_USER_CONVERSATION_REQUEST,
    payload: user
  };
}
export const selectConversation = (conversationId) => {
  return {
      type: types.SELECT_CONVERSATION,
      payload: conversationId
  }
}

export const sendMessage = (message) => {
  return {
      type: types.SEND_MESSAGE,
      payload: message
  }
}

export const initalizeSocketService = () => {
  return {
      type: types.INIT_SOCKET_SERVICE
  }
}
export const addFeedbackForConversationAction = (queryObj) => {
  return {
      type: types.ADD_FEEDBACK_CONVERSATION,
      payload: queryObj
  }
}