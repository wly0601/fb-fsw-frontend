/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { UPDATE_PRODUCTS } from '../actions/types';

const initialState = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const updateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      console.log(action.payload);
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
