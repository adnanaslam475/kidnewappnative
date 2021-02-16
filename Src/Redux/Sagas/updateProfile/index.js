import { Alert } from 'react-native';
import { put, takeEvery } from 'redux-saga/effects';
import { types } from '../../Types/updateProfile';
import { updateprofile } from './api';
import * as  NavigationService from '../../../Components/Services/NavigationService';
import Toast from 'react-native-simple-toast';

function* updateUser(action) {
    let data = {};
    if (action.payload.valueChange == 'first') {
        data = {
            fullName: action.payload.fullName,
            email: action.payload.email,
            dateOfBirth: action.payload.dateOfBirth,
            city: action.payload.city,
            aboutMe: action.payload.aboutMe,
            userAvatar: action.payload.userAvatar,
        }
    }
    else if (action.payload.valueChange == 'third') {
        data = {
            fullName: action.payload.fullName,
            email: action.payload.email,
            dateOfBirth: action.payload.dateOfBirth,
            city: action.payload.city,
            aboutMe: action.payload.aboutMe,
            userAvatar: action.payload.userAvatar,
            interests: action.payload.interests,
        }
    }
    else {
        data = {
            settings: {
                pushNotifications: action.payload.settings.pushNotifications,
                emailNotifications: action.payload.settings.emailNotifications,
                notificationSound: action.payload.settings.notificationSound
            },
        }
    }
    try {
        const result = yield updateprofile(data, action.payload.id)
        if (result.status === 201) {
            yield put({ type: types.UPDATE_PROFILE_SUCCESS, payload: result.message });
            if (action.payload.valueChange == 'second') {
                Toast.show('Setting Update');
            }
            else if (action.payload.valueChange == 'third') {
                Toast.show('Profile Update Succesfully');

            }
            else {
                NavigationService.navigate('Menu');
            }
        }
        else {
            yield put({ type: types.UPDATE_PROFILE_FAILURE, payload: result.message });
            if (result.message?.error) {
                Alert.alert(`${result.message.error}`)
            }
            else {
                Alert.alert(`${result.message.message}`)
            }
        }
    } catch (error) {
        yield put({ type: types.UPDATE_PROFILE_FAILURE, payload: error });
        Alert.alert(
            'Something Went Wrong',
            'Please Try Again',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    }
}
export function* updateProfileWatcher() {
    yield takeEvery(types.UPDATE_PROFILE_REQUEST, updateUser);
}