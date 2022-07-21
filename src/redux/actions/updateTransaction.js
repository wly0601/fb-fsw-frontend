/* eslint-disable import/prefer-default-export */
import { UPDATE_TRANSACTION } from './types';
import getUser from '../services/getUser';
import updateTransaction from '../services/updateTransaction';

export const updateTransactionByID = (id, req) => {
  return async (dispatch) => {
    try {
      const getUserById = await getUser();
      const updateTransactionID = await updateTransaction(id, req);
      console.log(updateTransactionID);

      await dispatch({
        type: UPDATE_TRANSACTION,
        payload: {
          loading: false,
          result: await updateTransactionByID.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: UPDATE_TRANSACTION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
