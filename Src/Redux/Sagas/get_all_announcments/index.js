import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/get_all_announcments';
import { getAnnouncementApi } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';

function* getAllAnnouncments(action) {
  try {
    const result = yield getAnnouncementApi();
    if (result.status === 200) {
      yield put({ type: types.GET_ANNOUNCEMENT_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_ANNOUNCEMENT_FAILURE, payload: result.message });
      Alert.alert("Internet Connection Issue")
    }
  } catch (error) {
    yield put({ type: types.GET_ANNOUNCEMENT_FAILURE, payload: error });
    Alert.alert("Internet Connection Issue")
    console.log("The Error", error);
  }
}
export function* getAnnouncementWatcher() {
  yield takeEvery(types.GET_ANNOUNCEMENT_REQUEST, getAllAnnouncments);
}