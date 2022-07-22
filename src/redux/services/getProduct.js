/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

export default function getAllProduct({
  page, category, search, buyer,
}) {
  console.log(buyer);
  let buyerRequest;
  if (buyer) {
    buyerRequest = `?buyerId=${buyer}&`;
  }
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://second-hand-be.herokuapp.com/api/products${buyerRequest || ''}?page=${page || 1}${category || ''}${search || ''}`);
}
