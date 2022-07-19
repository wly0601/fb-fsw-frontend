/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_TRANSACTION_ID } from '../actions/types';

const initialStateProduct = {
  transactionLoading: false,
  transactionResult: false,
  transactionError: false,
};

export const getTransactionByUserIdReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'GET_TRANSACTION_ID':
      return {
        ...state,
        transactionLoading: action.payload.loading,
        transactionResult: action.payload.result,
        transactionError: action.payload.error,
      };
    default:
      return state;
  }
};
