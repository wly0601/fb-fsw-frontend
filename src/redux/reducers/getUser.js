/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { getUserId } from '../actions/getUser';

const initialState = {
  userLoading: false,
  userResult: false,
  userError: false,
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getUserId':
      return {
        ...state,
        userLoading: action.payload.loading,
        userResult: action.payload.result,
        userError: action.payload.error,
      };
    default:
      return state;
  }
};
