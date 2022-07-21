/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_PRODUCTS_BY_ID } from '../actions/types';

const initialState = {
  productByIdLoading: false,
  productByIdResult: false,
  productByIdError: false,
};

export const getProductByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_BY_ID':
      console.log(action.payload);
      return {
        ...state,
        productByIdLoading: action.payload.loading,
        productByIdResult: action.payload.result,
        productByIdError: action.payload.error,
      };
    default:
      return state;
  }
};
