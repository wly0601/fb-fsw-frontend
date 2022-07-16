/* eslint-disable import/prefer-default-export */
import { GET_SOLD_PRODUCT } from './types';
import getUser from '../services/getUser';
import getSoldProductService from '../services/soldProduct';

export const getSoldProductByID = () => {
  return async (dispatch) => {
    try {
      const getUserById = await getUser();
      console.log(getUserById.data.id);
      const getSoldProduct = await getSoldProductService(getUserById.data.id);
      await dispatch({
        type: GET_SOLD_PRODUCT,
        payload: {
          loading: false,
          result: await getSoldProduct.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_SOLD_PRODUCT,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
