import axios from 'axios';

const token = localStorage.getItem('token');

export default function createTransaction(body) {
  const bodyInput = {
    productId: body.productId,
    bargainPrice: body.bargainPrice,
  };
  console.log(bodyInput);
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      'https://fp-fsw-backend.vercel.app/api/transaction',
      bodyInput,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
