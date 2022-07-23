/* eslint-disable import/prefer-default-export */
import { GET_PRODUCT_BY_SELLER } from './types';
import getProductBySeller from '../services/getProductBySeller';

export const getOneProductBySeller = (id) => {
  return async (
    dispatch,
  ) => {
    try {
      const getOneProduct = await getProductBySeller(id);
      await dispatch({
        type: GET_PRODUCT_BY_SELLER,
        payload: {
          loading: false,
          result: await getOneProduct.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_PRODUCT_BY_SELLER,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
