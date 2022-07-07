/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { createProduct } from '../actions/createProduct';

const initialState = {
  profileLoading: false,
  profileResult: false,
  profileError: false,
};

export const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createProduct':
      console.log(action.payload);
      return {
        ...state,
        profileLoading: action.payload.loading,
        profileResult: action.payload.result,
        profileError: action.payload.error,
      };
    default:
      return state;
  }
};
