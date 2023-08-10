/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateProductDetail(id, bodyUser) {
  console.log(id);
  return axios
  // eslint-disable-next-line prefer-template
    .put(
      `https://fp-fsw-backend.vercel.app/api/product/${id}`,
      bodyUser,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
