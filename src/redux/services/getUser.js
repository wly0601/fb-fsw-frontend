import axios from 'axios';

const token = localStorage.getItem('token');

export default function getUser() {
  return axios
    // eslint-disable-next-line prefer-template
    .get('https://fp-fsw-backend.vercel.app/api/who-am-i', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
