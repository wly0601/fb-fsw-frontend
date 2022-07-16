import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import { getProductReducer } from './product';
import { getProfileReducer } from './profile';
import { updateProductReducer } from './updateProduct';
import { getSellerProductReducer } from './sellerProduct';
import { getTransactionProductReducer } from './createTransaction';
import { getListNotifications } from './getNotif';
import { getProductInterestReducer } from './productInterest';
import { getProductMetaReducer } from './productMeta';
import { getTransactionByUserIdReducer } from './getTransactionByUserId';
import { updateTransactionReducer } from './updateTransactionReducer';
import { updateTransactionConfirmationReducer } from './updateTransactionConfirmation';
import { getSoldProductReducer } from './soldProductReducer';

export default combineReducers({
  auth,
  message,
  getProductReducer,
  getProfileReducer,
  updateProductReducer,
  getSellerProductReducer,
  getTransactionProductReducer,
  getListNotifications,
  getProductInterestReducer,
  getProductMetaReducer,
  getTransactionByUserIdReducer,
  updateTransactionReducer,
  updateTransactionConfirmationReducer,
  getSoldProductReducer,
});
