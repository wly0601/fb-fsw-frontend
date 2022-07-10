import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import { getProductReducer } from './product';
import { getProfileReducer } from './profile';
import { getListNotifications } from './getNotif';

export default combineReducers({
  auth,
  message,
  getProductReducer,
  getProfileReducer,
  getListNotifications,
});
