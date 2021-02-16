import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/getProfile';
import { getProfileUser } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';

function* getProfile(action) {
    try {
        const result = yield getProfileUser(action.payload.id);
        console.log('result Response', result)
        if (result.status === 200) {
            yield put({ type: types.GET_PROFILE_SUCCESS, payload: result.message });
        }
        else if (result.status === 400) {
            yield put({ type: types.GET_PROFILE_FAILURE, payload: result.message });
            Alert.alert("Internet Connection Issue")
        }
        else {
            yield put({ type: types.GET_PROFILE_FAILURE, payload: result.message });
            Alert.alert("Internet Connection Issue")
        }
    } catch (error) {
        yield put({ type: types.GET_PROFILE_FAILURE, payload: error });
        Alert.alert("Internet Connection Issue")
        console.log("The Error", error);
    }
}
export function* getProfileWatcher() {
    yield takeEvery(types.GET_PROFILE_REQUEST, getProfile);
}