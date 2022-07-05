/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { setProducts } from '../actions/product';

const initialState = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const getProductReducer = async (state = initialState, action) => {
  switch (action.type) {
    case 'setProducts':
      console.log(action.payload)
      return {
        ...state,
        productLoading: await action.payload.loading,
        productResult: await action.payload.result,
        productError: await action.payload.error,
      };
    default:
      return state;
  }
};