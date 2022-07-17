/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line quotes
import { GET_HISTORY_BUYER } from "../actions/types";

const initialState = {
  historyLoading: false,
  historyResult: false,
  historyError: false,
};

export const getHistoryBuyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HISTORY_BUYER':
      console.log(action.payload);
      return {
        ...state,
        historyLoading: action.payload.loading,
        historyResult: action.payload.result,
        historyError: action.payload.error,
      };
    default:
      return state;
  }
};
