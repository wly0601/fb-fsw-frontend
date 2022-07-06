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
    await axios.get('https://second-hand-be.herokuapp.com/api/products')
      .then(async (res) => {
        await dispatch({
          type: await setProducts,
          payload: {
            loading: false,
            result: await res.data.data.data,
            error: false,
          },
        });
        await axios.get(`https://second-hand-be.herokuapp.com/api/category/${res.data.id.toString()}`)
          .then(async (result) => {
            console.log(result);
            await dispatch({
              type: setProducts,
              payload: {
                loading: false,
                result: await result.data,
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
                error: await err.message,
              },
            });
          });
      })
      .catch(async (err) => {
        await dispatch({
          type: setProducts,
          payload: {
            loading: false,
            result: false,
            error: await err.message,
          },
        });
      });
  };
};
