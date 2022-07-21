/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import getUser from '../services/getUser';
import updateProductCloudinary from '../services/updateProductCloudinary';
import createProduct from '../services/createProduct';
import { CREATE_PRODUCTS } from './types';

const url = [];
let cloudinaryUpload;
let updateProductPhoto;

export const createListProduct = (image, body) => {
  return async (
    dispatch,
  ) => {
    try {
      const getUserById = await getUser();
      console.log(getUserById.data.id);
      // eslint-disable-next-line no-plusplus
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
        price: body.price,
        description: body.description,
        categoryId: body.categoryId,
      };
      const createProducts = await createProduct(bodyProduct);
      await dispatch({
        type: CREATE_PRODUCTS,
        payload: {
          loading: false,
          result: await createProducts.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: CREATE_PRODUCTS,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
