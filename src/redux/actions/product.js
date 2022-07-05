/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const setProducts = 'setProducts';

export const getListProducts = () => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    await dispatch({
      type: setProducts,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API
    const token = await localStorage.getItem('token');
    await axios.get('https://second-hand-be.herokuapp.com/api/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        await dispatch({
          type: await setProducts,
          payload: {
            loading: false,
            result: await res.data,
            error: false,
          },
        });
      })
      .catch(async (err) => {
        await dispatch({
          type: setProducts,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
  };
};
