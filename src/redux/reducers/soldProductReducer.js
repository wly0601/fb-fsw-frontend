/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_SOLD_PRODUCT } from '../actions/types';

const initialStateProduct = {
  soldProductLoading: false,
  soldProductResult: false,
  soldProductError: false,
};

export const getSoldProductReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'GET_SOLD_PRODUCT':
      return {
        ...state,
        soldProductLoading: action.payload.loading,
        soldProductResult: action.payload.result,
        soldProductError: action.payload.error,
      };
    default:
      return state;
  }
};
