/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_PRODUCT_BY_SELLER } from '../actions/types';

const initialState = {
  productBySellerLoading: false,
  productBySellerResult: false,
  productBySellerError: false,
};

export const getProductBySellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_BY_SELLER':
      console.log(action.payload);
      return {
        ...state,
        productBySellerLoading: action.payload.loading,
        productBySellerResult: action.payload.result,
        productBySellerError: action.payload.error,
      };
    default:
      return state;
  }
};
