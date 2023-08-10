import axios from 'axios';

const API_URL = 'https://fp-fsw-backend.vercel.app/api/';
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

const logout = () => {
  localStorage.removeItem('token');
};

export default {
  register,
  login,
  logout,
};
