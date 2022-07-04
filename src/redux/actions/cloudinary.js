/* eslint-disable no-undef */
import axios from 'axios';
// import { useDispatch } from 'react-redux';

export const getCloudinary = 'getCloudinary';

export const getCloudinaryPicture = (id, image) => {
  return async (dispatch) => {
    // const dispatch = useDispatch();
    // Loading
    dispatch({
      type: getCloudinary,
      payload: {
        loading: true,
        result: false,
        error: false,
      },
    });
    // GET API
    const cloudinaryUpload = new FormData();
    cloudinaryUpload.append('picture', image);
    const token = localStorage.getItem('token');
    await axios.put(
      `https://second-hand-be.herokuapp.com/api/user/picture/${id.toString()}/cloudinary`,
      cloudinaryUpload,

      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((res) => {
        dispatch({
          type: getCloudinary,
          payload: {
            loading: false,
            result: res.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: getCloudinary,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
  };
};
