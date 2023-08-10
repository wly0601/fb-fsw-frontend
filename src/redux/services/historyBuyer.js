import axios from 'axios';

const token = localStorage.getItem('token');

export default function getHistoryBuyerService() {
  console.log('lewat sini');
  return axios
    // eslint-disable-next-line prefer-template
    .get('https://fp-fsw-backend.vercel.app/api/user/buyer/history-as-buyer', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
