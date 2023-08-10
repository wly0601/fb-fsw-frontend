import axios from 'axios';

const token = localStorage.getItem('token');

export default function createProduct(bodyProduct) {
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      'https://fp-fsw-backend.vercel.app/api/products',
      bodyProduct,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
