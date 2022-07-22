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
      'https://second-hand-be.herokuapp.com/api/transaction',
      bodyInput,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
