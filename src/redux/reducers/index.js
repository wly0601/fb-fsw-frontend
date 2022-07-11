import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import { getProductReducer } from './product';
import { getProfileReducer } from './profile';

export default combineReducers({
  auth,
  message,
  getProductReducer,
  getProfileReducer,
});

