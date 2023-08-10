import axios from 'axios';

const token = localStorage.getItem('token');

export default function createWishlist(productById, condition) {
  const requestBody = {
    productId: productById.id,
    activeBtn: condition,
  };

  console.log(requestBody);
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      'https://fp-fsw-backend.vercel.app/api/wishlist',
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
