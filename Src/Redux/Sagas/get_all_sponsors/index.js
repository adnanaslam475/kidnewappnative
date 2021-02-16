import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/get_all_sponsors';
import { getAllSponserApi } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';

function* getAllSponsors(action) {
  try {
    const result = yield getAllSponserApi();
    console.log('result Response', result)
    if (result.status === 200) {
      yield put({ type: types.GET_SPONSERS_SUCCESS, payload: result.message });
    }
    else {
      yield put({ type: types.GET_SPONSERS_FAILURE, payload: result.message });
      Alert.alert("Internet Connection Issue")
    }
  } catch (error) {
    yield put({ type: types.GET_SPONSERS_FAILURE, payload: error });
    Alert.alert("Internet Connection Issue")
  }
}
export function* getAllSponsorsWatcher() {
  yield takeEvery(types.GET_SPONSERS_REQUEST, getAllSponsors);
}