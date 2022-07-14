/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

export default function getProductById(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://second-hand-be.herokuapp.com/api/product/${id}`);
}
