/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const updateProfile = 'updateProfile';

export const updateListProfile = (id, body) => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    dispatch({
      type: updateProfile,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API
    const token = localStorage.getItem('token');
    await axios.put(
      `https://second-hand-be.herokuapp.com/api/users/${id.toString()}/detail`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: updateProfile,
          payload: {
            loading: false,
            result: res.data.data.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: updateProfile,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
  };
};
