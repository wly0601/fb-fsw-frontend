/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { getCloudinary } from '../actions/cloudinary';

const initialState = {
  cloudinaryLoading: false,
  cloudinaryResult: false,
  cloudinaryError: false,
};

export const getCloudinaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCloudinary':
      return {
        ...state,
        cloudinaryLoading: action.payload.loading,
        cloudinaryResult: action.payload.result,
        cloudinaryError: action.payload.error,
      };
    default:
      return state;
  }
};
