/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { CREATE_TRANSACTION } from '../actions/types';

const initialStateProduct = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const getTransactionProductReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'CREATE_TRANSACTION':
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
