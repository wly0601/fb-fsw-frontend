import axios from 'axios';

const token = localStorage.getItem('token');

export default function getSoldProductService(id) {
  console.log(id);
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://fp-fsw-backend.vercel.app/api/user/${id}/products?filterByStatusId=3`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
