import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import { getProductReducer } from './product';
import { getUserReducer } from './getUser';
import { getCloudinaryReducer } from './cloudinary';
import { getProfileReducer } from './profile';

export default combineReducers({
  // auth,
  // message,
  getProductReducer,
  // getUserReducer,
  // getCloudinaryReducer,
  // getProfileReducer,
});

// export default getProductReducer;