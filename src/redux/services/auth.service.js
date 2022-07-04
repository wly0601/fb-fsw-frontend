import axios from 'axios';

const API_URL = 'https://second-hand-be.herokuapp.com/api/';
const register = (name, email, password) => {
  return axios
  // eslint-disable-next-line prefer-template
    .post(API_URL + 'register', {
      name, email, password,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    // eslint-disable-next-line prefer-template
    .post(API_URL + 'login', {
      email, password,
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

// const updateProfile = (photo, phoneNumber, address, cityId) => {
//   const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFobWFkIFl1bmVkYSBBbGZhanIiLCJlbWFpbCI6ImFobWFkYWxmYWpyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjY1NDAyMn0.DR95ABFH0LS7A_Uzuo7HKDXSTZ3at4JtObj3799Pmfk';
//   return axios
//     // eslint-disable-next-line prefer-template
//     .put(API_URL + 'users/:id/detail', {
//       photo,
//       phoneNumber,
//       address,
//       cityId,
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     });
// };

// const uploadImage = (id, picture) => {
//   return axios
//     // eslint-disable-next-line prefer-template
//     .put(API_URL + 'user/picture/:id/cloudinary', {
//       id, picture,
//     })
//     .set('Authorization', 'Bearer ' +)
//     .then((response) => {
//       if (response.data.url) {
//         localStorage.setItem('user', JSON.stringify(response.data));
//       }
//       return response.data;
//     });
// };

export default {
  register,
  login,
  // updateProfile,
  // uploadImage,
};
