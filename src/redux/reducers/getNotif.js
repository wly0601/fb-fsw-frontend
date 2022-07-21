/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_NOTIFICATION } from '../actions/types';

const initialState = {
  notifLoading: false,
  notifResult: false,
  notifError: false,
};

export const getListNotifications = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NOTIFICATION':
      console.log(action.payload);
      return {
        ...state,
        notifLoading: action.payload.loading,
        notifResult: action.payload.result,
        notifError: action.payload.error,
      };
    default:
      return state;
  }
};
