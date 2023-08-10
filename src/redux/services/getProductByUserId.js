/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');
export default function getProductByUserId(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://fp-fsw-backend.vercel.app/api/user/${id}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
