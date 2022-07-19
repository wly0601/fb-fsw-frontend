/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { UPDATE_TRANSACTION_CONFIRMATION } from '../actions/types';

const initialStateProduct = {
  confirmationLoading: false,
  confirmationResult: false,
  confirmationError: false,
};

export const updateTransactionConfirmationReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'UPDATE_TRANSACTION_CONFIRMATION':
      return {
        ...state,
        confirmationLoading: action.payload.loading,
        confirmationResult: action.payload.result,
        confirmationError: action.payload.error,
      };
    default:
      return state;
  }
};
