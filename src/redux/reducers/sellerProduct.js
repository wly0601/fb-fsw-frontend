/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { SELLER_PRODUCTS } from '../actions/types';

const initialStateProduct = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const getSellerProductReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'SELLER_PRODUCTS':
      return {
        ...state,
        productLoading: action.payload.loading,
        productResult: action.payload.result,
        productError: action.payload.error,
      };
    default:
      return state;
  }
};
