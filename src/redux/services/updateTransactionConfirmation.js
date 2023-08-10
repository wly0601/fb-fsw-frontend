import axios from 'axios';

const token = localStorage.getItem('token');

export default function updateTransactionConfirmation(id, request) {
  console.log(id);
  const requestBody = {
    isCanceled: request,
  };
  return axios
    // eslint-disable-next-line prefer-template
    .put(
      `https://fp-fsw-backend.vercel.app/api/transaction/${id}/confirmation`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
