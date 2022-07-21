/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const setProductInterest = 'setProductInterest';

export const getListProductInterest = () => {
  return async (dispatch) => {
  // const dispatch = useDispatch();
  // Loading
    await dispatch({
      type: setProductInterest,
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
      .then(async (resultUser) => {
        console.log(resultUser.data);
        const id = resultUser.data.id.toString();
        const test = await axios.get(`https://second-hand-be.herokuapp.com/api/user/${id}/products?filterByStatusId=2`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
          .then(async (res) => {
            console.log(res.data.products);
            await dispatch({
              type: await setProductInterest,
              payload: {
                loading: false,
                result: await res.data.products,
                error: false,
              },
            });
          })
          .catch(async (err) => {
            await dispatch({
              type: setProductInterest,
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
          type: setProductInterest,
          payload: {
            loading: false,
            result: false,
            error: await err.message,
          },
        });
      });
  };
};
