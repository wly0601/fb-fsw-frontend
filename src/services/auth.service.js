import axios from 'axios';

const API_URL = 'https://second-hand-be.herokuapp.com/api/';
const register = (name, email, password) => {
  // eslint-disable-next-line prefer-template
  return axios.post(API_URL + 'register', {
    name, email, password,
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

export default {
  register,
  login,
};
