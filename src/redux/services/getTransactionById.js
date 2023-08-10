import axios from 'axios';

const token = localStorage.getItem('token');

export default function getTransactionById(buyerId) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(
      `https://fp-fsw-backend.vercel.app/api/buyer/${buyerId}/transaction`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
