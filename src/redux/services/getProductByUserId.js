/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

const token = localStorage.getItem('token');
export default function getProductByUserId(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://second-hand-be.herokuapp.com/api/user/${id.toString()}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
