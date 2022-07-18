/* eslint-disable import/prefer-default-export */
import { GET_TRANSACTION_ID } from './types';
import getUser from '../services/getUser';
import getTransactionById from '../services/getTransactionById';

export const getTransactionByUserId = (buyerId) => {
  return async (dispatch) => {
    try {
      const getUserById = await getUser();
      const getTransactionByUser = await getTransactionById(buyerId);
      await dispatch({
        type: GET_TRANSACTION_ID,
        payload: {
          loading: false,
          result: await getTransactionByUser.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_TRANSACTION_ID,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
