/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { CREATE_TRANSACTION } from './types';
import getUser from '../services/getUser';
import createTransactionProduct from '../services/createTransactionProduct';

export const createTransaction = (body) => {
  return async (
    dispatch,
  ) => {
    try {
      const getUserById = await getUser();
      console.log(getUserById.data.id);
      const bodyInput = {
        productId: body.productId,
        bargainPrice: body.inputBargain,
      };
      const createNego = await createTransaction(bodyInput);
      await dispatch({
        type: await CREATE_TRANSACTION,
        payload: {
          loading: false,
          result: await res.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: CREATE_TRANSACTION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
