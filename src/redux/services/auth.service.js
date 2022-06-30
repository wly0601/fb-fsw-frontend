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
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

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
  // uploadImage,
};
