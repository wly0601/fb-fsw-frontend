/* eslint-disable import/prefer-default-export */
import { GET_PRODUCTS_BY_ID } from './types';
import getProductById from '../services/getProductById';

export const getOnlyOneProduct = (id, buyer) => {
  return async (
    dispatch,
  ) => {
    try {
      const getOneProduct = await getProductById(id, buyer);
      await dispatch({
        type: GET_PRODUCTS_BY_ID,
        payload: {
          loading: false,
          result: await getOneProduct.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_PRODUCTS_BY_ID,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
