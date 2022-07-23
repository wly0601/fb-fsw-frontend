/* eslint-disable import/prefer-default-export */
import { GET_NOTIFICATION } from './types';
import getUser from '../services/getUser';
import getNotif from '../services/getNotif';

export const getListNotifications = () => {
  return async (
    dispatch,
  ) => {
    try {
      const getNotifications = await getNotif();
      console.log(getNotifications.data.data);
      await dispatch({
        type: GET_NOTIFICATION,
        payload: {
          loading: false,
          result: await getNotifications.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_NOTIFICATION,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
