import axios from 'axios';

const token = localStorage.getItem('token');

export default function getCategory(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://fp-fsw-backend.vercel.app/api/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
