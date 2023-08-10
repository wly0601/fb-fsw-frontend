/* eslint-disable import/no-import-module-exports */
import axios from 'axios';

export default function getAllProduct({
  page, category, search, buyer,
}) {
  console.log(buyer, page);
  let buyerRequest;
  if (buyer) {
    buyerRequest = `?buyerId=${buyer}&`;
  }
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://fp-fsw-backend.vercel.app/api/products${buyerRequest || ''}?page=${page || 1}${category || ''}${search || ''}`);
}
