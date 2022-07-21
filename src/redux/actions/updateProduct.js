/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { UPDATE_PRODUCTS } from './types';
import getUser from '../services/getUser';
import updateProductCloudinary from '../services/updateProductCloudinary';
import getProductById from '../services/getProductById';
import updateProductDetail from '../services/updateProductDetail';

const url = [];
let cloudinaryUpload;
let updateProductPhoto;

export const updateListProduct = (image, body, id) => {
  return async (
    dispatch,
  ) => {
    try {
      const getUserById = await getUser();
      console.log(getUserById.data.id);
      for (let i = 0; i < image.length; i++) {
        cloudinaryUpload = new FormData();
        cloudinaryUpload.append('picture', image[i]);
        console.log(image[i]);
        // eslint-disable-next-line no-await-in-loop
        updateProductPhoto = await updateProductCloudinary(getUserById.data.id, cloudinaryUpload);
        url.push(updateProductPhoto.data.url);
      }
      console.log(url);
      const bodyProduct = {
        name: body.name,
        images: url,
        // eslint-disable-next-line radix
        price: parseInt(body.price),
        description: body.description,
        categoryId: body.categoryId,
      };
      const getProductId = await getProductById(id);
      const updateProductDetails = await updateProductDetail(getProductId.data.id, bodyProduct);
      console.log(getProductId.data.id);
      await dispatch({
        type: UPDATE_PRODUCTS,
        payload: {
          loading: false,
          result: await updateProductDetails.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: UPDATE_PRODUCTS,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
