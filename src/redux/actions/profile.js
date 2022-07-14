/* eslint-disable import/prefer-default-export */
import getUser from '../services/getUser';
import updateUserCloudinary from '../services/updateUserCloudinary';
import updateUserDetail from '../services/updateUserDetail';
import { UPDATE_PROFILE } from './types';

export const updateListProfile = (image, body) => {
  return async (
    dispatch,
  ) => {
    try {
      // GET API USER
      const getUserById = await getUser();
      const cloudinaryUpload = new FormData();
      cloudinaryUpload.append('picture', image);
      const resultCloudinary = await updateUserCloudinary(getUserById.data.id, cloudinaryUpload);
      const bodyUser = {
        name: body.name,
        photo: resultCloudinary.data.url,
        phoneNumber: body.phoneNumber,
        address: body.address,
        cityId: body.cityId,
      };
      const getUserProfile = await updateUserDetail(getUserById.data.id, bodyUser);
      console.log(getUser.data);
      await dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: false,
          result: await getUserProfile.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
