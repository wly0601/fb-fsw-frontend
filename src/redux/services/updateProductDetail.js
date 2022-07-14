/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateProductDetail(id, bodyUser) {
  return axios
  // eslint-disable-next-line prefer-template
    .put(
      `https://second-hand-be.herokuapp.com/api/product/${id}`,
      bodyUser,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
