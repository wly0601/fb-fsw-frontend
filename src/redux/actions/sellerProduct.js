/* eslint-disable import/prefer-default-export */
import { SELLER_PRODUCTS } from './types';
import getUser from '../services/getUser';
import getProductByUserId from '../services/getProductByUserId';

export const getSellerListProducts = () => {
  return async (
    dispatch,
  ) => {
    try {
      // GET API USER
      const getUserById = await getUser();
      const getSellerProduct = await getProductByUserId(getUserById.data.id);
      await dispatch({
        type: SELLER_PRODUCTS,
        payload: {
          loading: false,
          result: await getSellerProduct.data.products,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: SELLER_PRODUCTS,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
