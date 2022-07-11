/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const sellerProducts = 'sellerProducts';

export const getSellerListProducts = () => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    await dispatch({
      type: sellerProducts,
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
      .then(async (result) => {
        console.log(result.data);
        await axios.get(`https://second-hand-be.herokuapp.com/api/user/${result.data.id.toString()}/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(async (res) => {
            console.log(res.data);
            await dispatch({
              type: await sellerProducts,
              payload: {
                loading: false,
                result: await res.data.products,
                error: false,
              },
            });
          })
          .catch(async (err) => {
            await dispatch({
              type: sellerProducts,
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
          type: sellerProducts,
          payload: {
            loading: false,
            result: false,
            error: await err.message,
          },
        });
      });
  };
};
