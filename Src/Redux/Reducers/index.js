import { combineReducers } from 'redux'
import authReducer from './auth';
import forgotReducer from './forgotPassword';
import updateProfileReducer from './updateProfile';
import getProfileReducer from './getProfile';
import getLearnMoreReducer from './get_learn_more';
import getAllSponserReducer from './get_all_sponsors';
import getAnnouncmentReducer from './get_all_announcments';
import getUserConversationsReducer from './get_user_conversations';
export default combineReducers({
  auth: authReducer,
  forgot: forgotReducer,
  updateProfile: updateProfileReducer,
  getProfile: getProfileReducer,
  getLearn: getLearnMoreReducer,
  getSponsors: getAllSponserReducer,
  getAnnouncment: getAnnouncmentReducer,
  getConversation: getUserConversationsReducer,
});