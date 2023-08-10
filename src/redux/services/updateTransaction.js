import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateTransaction(id, request) {
  console.log(id);
  const requestBody = {
    accBySeller: request,
  };
  return axios
    // eslint-disable-next-line prefer-template
    .put(
      `https://fp-fsw-backend.vercel.app/api/transaction/${id}`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
