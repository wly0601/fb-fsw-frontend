/* eslint-disable import/prefer-default-export */
import { UPDATE_TRANSACTION_CONFIRMATION } from './types';
import getUser from '../services/getUser';
import updateTransactionConfirmation from '../services/updateTransactionConfirmation';

export const updateConfirmation = (id, req) => {
  return async (dispatch) => {
    try {
      const getUserById = await getUser();
      const updateConfirmationID = await updateTransactionConfirmation(id, req);
      console.log(updateConfirmationID);

      await dispatch({
        type: UPDATE_TRANSACTION_CONFIRMATION,
        payload: {
          loading: false,
          result: await updateConfirmation.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: UPDATE_TRANSACTION_CONFIRMATION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
