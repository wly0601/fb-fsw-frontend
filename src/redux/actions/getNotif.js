/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
import axios from 'axios';

export const getNotification = 'getNotification';

export const getListNotifications = () => {
  const url = [];
  return async (dispatch) => {
    // Loading
    dispatch({
      type: getNotification,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API USER
    const token = localStorage.getItem('token');
    await axios.get('https://second-hand-be.herokuapp.com/api/who-am-i', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (resultUser) => {
        console.log(resultUser);
        await axios.get(`https://second-hand-be.herokuapp.com/api/user/${resultUser.data.id.toString()}/notifications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(async (dataNotif) => {
            console.log(dataNotif.data.data);
            await dispatch({
              type: getNotification,
              payload: {
                loading: false,
                result: await dataNotif.data.data,
                error: false,
              },
            });
          })
          .catch((err) => {
            dispatch({
              type: getNotification,
              payload: {
                loading: false,
                result: false,
                error: err.message,
              },
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: getNotification,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
    console.log('line 112');
  };
};
