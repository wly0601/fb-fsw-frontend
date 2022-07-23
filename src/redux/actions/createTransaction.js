/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { CREATE_TRANSACTION } from './types';
import getUser from '../services/getUser';
import transaction from '../services/createTransaction';

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
      console.log(bodyInput);
      const bargain = await transaction(bodyInput);
      await dispatch({
        type: await CREATE_TRANSACTION,
        payload: {
          loading: false,
          result: await bargain.data,
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
