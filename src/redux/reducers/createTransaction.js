/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { createTransaction } from '../actions/createTransaction';

const initialStateProduct = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const getTransactionProductReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'createTransaction':
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
