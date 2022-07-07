/* eslint-disable no-undef */
import axios from 'axios';

export const createProduct = 'createProduct';

export const createListProduct = (image, body) => {
  return async (dispatch) => {
    // Loading
    dispatch({
      type: createProduct,
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
        const cloudinaryUpload = new FormData();
        cloudinaryUpload.append('picture', image);
        await axios.put(
          `https://second-hand-be.herokuapp.com/api/product/picture/${resultUser.data.id.toString()}/cloudinary`,
          cloudinaryUpload,

          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          },
        )
          .then(async (resultCloudinary) => {
            const bodyProduct = {
              name: body.name,
              photo: resultCloudinary.data.url,
              price: body.price,
              description: body.description,
              categoryId: body.categoryId,
            };
            await axios.post(
              'https://second-hand-be.herokuapp.com/api/products',
              bodyProduct,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              },
            )
              .then(async (result) => {
                console.log(result);
                await dispatch({
                  type: createProduct,
                  payload: {
                    loading: false,
                    result: await result.data,
                    error: false,
                  },
                });
              })
              .catch((err) => {
                dispatch({
                  type: createProduct,
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
              type: getCloudinary,
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
          type: getProductId,
          payload: {
            loading: false,
            result: false,
            error: err.message,
          },
        });
      });
  };
};
