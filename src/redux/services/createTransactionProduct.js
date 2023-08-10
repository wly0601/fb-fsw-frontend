import axios from 'axios';

const token = localStorage.getItem('token');

export default function createTransactionProduct(bodyInput) {
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      'https://fp-fsw-backend.vercel.app/api/transaction',
      bodyInput,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
