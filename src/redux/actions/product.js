/* eslint-disable import/prefer-default-export */
import { SET_PRODUCTS } from './types';
import getAllProduct from '../services/getProduct';

export const getListProducts = () => {
  return async (
    dispatch,
  ) => {
    try {
      // GET API USER
      const getProducts = await getAllProduct();
      console.log(getProducts.data.products);
      await dispatch({
        type: SET_PRODUCTS,
        payload: {
          loading: false,
          result: await getProducts.data.products,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: SET_PRODUCTS,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
