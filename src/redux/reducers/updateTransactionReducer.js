/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { UPDATE_TRANSACTION } from '../actions/types';

const initialStateProduct = {
  transactionLoading: false,
  transactionResult: false,
  transactionError: false,
};

export const updateTransactionReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'UPDATE_TRANSACTION':
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
