/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const setProducts = 'setProducts';

export const getListProducts = () => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    dispatch({
      type: setProducts,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API
    const token = localStorage.getItem('token');
    await axios.get('https://second-hand-be.herokuapp.com/api/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        localStorage.setItem("product", res.data.data.data )
        dispatch({
          type: setProducts,
          payload: {
            loading: false,
            result: res.data.data.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
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
