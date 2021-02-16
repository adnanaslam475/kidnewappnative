import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/get_learn_more';
import { getLearnMoreApi } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';

function* getLearnMore(action) {
  try {
    const result = yield getLearnMoreApi();
    if (result.status === 200) {
      yield put({ type: types.LEARN_MORE_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.LEARN_MORE_FAILURE, payload: result.message });
      Alert.alert("Internet Connection Issue")
    }
  } catch (error) {
    yield put({ type: types.LEARN_MORE_FAILURE, payload: error });
    Alert.alert("Internet Connection Issue")
  }
}
export function* getLearnMoreWatcher() {
  yield takeEvery(types.LEARN_MORE_REQUEST, getLearnMore);
}