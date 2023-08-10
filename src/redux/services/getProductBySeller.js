/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

export default function getProductBySeller(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://fp-fsw-backend.vercel.app/api/product/${id}`);
}
