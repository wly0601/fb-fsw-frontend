/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const createTransaction = 'createTransaction';

export const getTransactionProducts = () => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    await dispatch({
      type: createTransaction,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API
    await axios.post('https://second-hand-be.herokuapp.com/api/transaction')
      .then(async (res) => {
        console.log(res.data);
        await dispatch({
          type: await createTransaction,
          payload: {
            loading: false,
            result: await res.data,
            error: false,
          },
        });
      })
      .catch(async (err) => {
        await dispatch({
          type: createTransaction,
          payload: {
            loading: false,
            result: false,
            error: await err.message,
          },
        });
      });
  };
};
