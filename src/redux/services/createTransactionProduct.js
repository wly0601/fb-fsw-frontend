import axios from 'axios';

const token = localStorage.getItem('token');

export default function createTransactionProduct(bodyInput) {
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      'https://second-hand-be.herokuapp.com/api/transaction',
      bodyInput,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
