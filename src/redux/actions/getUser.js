/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const getUserId = 'getUserId';

export const getListUser = () => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    dispatch({
      type: getUserId,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API
    const token = localStorage.getItem('token');
    await axios.get('https://second-hand-be.herokuapp.com/api/who-am-i', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch({
          type: getUserId,
          payload: {
            loading: false,
            result: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getUserId,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
  };
};
