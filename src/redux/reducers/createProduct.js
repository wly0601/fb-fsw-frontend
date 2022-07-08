/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { createProduct } from '../actions/createProduct';

const initialState = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createProduct':
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
