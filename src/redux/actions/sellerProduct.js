/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const sellerProducts = 'sellerProducts';
export const setProductsMeta = 'setProductsMeta';

export const getSellerListProducts = ({ page }) => {
  return async (dispatch) => {
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
        const sellerID = result.data.id.toString();
        await axios.get(`https://second-hand-be.herokuapp.com/api/user/${sellerID}/products?page=${page || 1}`, {
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
            await dispatch({
              type: await setProductsMeta,
              payload: {
                loading: false,
                result: await res.data.meta,
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
