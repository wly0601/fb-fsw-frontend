/* eslint-disable import/prefer-default-export */
import { GET_HISTORY_BUYER } from './types';
import getUser from '../services/getUser';
import historyBuyer from '../services/historyBuyer';

export const getHistoryBuyer = () => {
  return async (dispatch) => {
    try {
      const getBuyer = await getUser();
      const listHistoryBuyer = await historyBuyer();
      console.log(listHistoryBuyer.data.result);

      await dispatch({
        type: GET_HISTORY_BUYER,
        payload: {
          loading: false,
          result: await listHistoryBuyer.data.result,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_HISTORY_BUYER,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
