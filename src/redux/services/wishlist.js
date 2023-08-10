import axios from 'axios';

const token = localStorage.getItem('token');

export default function getBookmarkService() {
  return axios
    // eslint-disable-next-line prefer-template
    .get('https://fp-fsw-backend.vercel.app/api/wishlist', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
