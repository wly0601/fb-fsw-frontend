import axios from 'axios';

const token = localStorage.getItem('token');

export default function getTransactionById(buyerId) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(
      `https://second-hand-be.herokuapp.com/api/buyer/${buyerId}/transaction`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
