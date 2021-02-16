import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/forgotPassword';
import { forgot } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';

function* forgotUser(action) {
    try {
        const result = yield forgot(action.payload);
        if (result.status === 201) {
            yield put({ type: types.FORGOT_SUCCESS, payload: result.message });
            Alert.alert("Check Your Email")
            NavigationService.navigate('Login');
        }
        else {
            yield put({ type: types.FORGOT_FAILURE, payload: result.message });
            if (result.message?.error) {
                Alert.alert(`${result.message.error}`)
            }
            else {
                Alert.alert(`${result.message.message}`)
            }
        }
    } catch (error) {
        yield put({ type: types.FORGOT_FAILURE, payload: error });
        Alert.alert("Email Is Not Matched")
    }
}
export function* forgethWatcher() {
    yield takeEvery(types.FORGOT_REQUEST, forgotUser);
}