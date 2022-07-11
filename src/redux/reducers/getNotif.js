/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { getNotification } from '../actions/getNotif';

const initialState = {
  notifLoading: false,
  notifResult: false,
  notifError: false,
};

export const getListNotifications = (state = initialState, action) => {
  switch (action.type) {
    case 'getNotification':
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
