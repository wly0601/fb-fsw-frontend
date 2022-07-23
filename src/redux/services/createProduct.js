import axios from 'axios';

const token = localStorage.getItem('token');

export default function createProduct(bodyProduct) {
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      'https://second-hand-be.herokuapp.com/api/products',
      bodyProduct,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
