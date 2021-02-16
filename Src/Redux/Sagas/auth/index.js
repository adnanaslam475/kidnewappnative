import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/auth';
import { login } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';

function* loginUser(action) {
  try {
    const result = yield login(action.payload);
    if (result.status === 201) {
      yield put({ type: types.LOGIN_SUCCESS, payload: result.message });
      if (result.message.user.city && result.message.user.aboutMe) {
        NavigationService.navigate('Menu');
      }
      else {
        NavigationService.navigate('SignUp');
      }
    }
    else {
      yield put({ type: types.LOGIN_FAILURE, payload: result.message });
      if (result.message?.error) {
        Alert.alert(`${result.message.error}`)
      }
      else {
        Alert.alert(`${result.message.message}`)
      }
    }
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, payload: error });
    Alert.alert("Invalid Credentials")
  }
}
export function* authWatcher() {
  yield takeEvery(types.LOGIN_REQUEST, loginUser);
}