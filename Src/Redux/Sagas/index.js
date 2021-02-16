import { fork, all } from 'redux-saga/effects';
import { authWatcher } from './auth/index';
import { forgethWatcher } from './forgotPassword/index';
import { updateProfileWatcher } from './updateProfile/index';
import { getProfileWatcher } from './getProfile/index';
import { getLearnMoreWatcher } from './get_learn_more/index';
import { getAllSponsorsWatcher } from './get_all_sponsors/index';
import { getAnnouncementWatcher } from './get_all_announcments/index';
import { getUserConversationsWatcher } from './get_user_conversations/index';
export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(forgethWatcher),
    fork(updateProfileWatcher),
    fork(getProfileWatcher),
    fork(getLearnMoreWatcher),
    fork(getAllSponsorsWatcher),
    fork(getAnnouncementWatcher),
    fork(getUserConversationsWatcher),
  ])
}