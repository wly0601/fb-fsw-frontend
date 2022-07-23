/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { SET_PRODUCTS } from '../actions/types';

const initialStateProduct = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const getProductReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
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
