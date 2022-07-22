import axios from 'axios';

const token = localStorage.getItem('token');

export default function getNotif(id) {
  console.log(id);
  return axios
    // eslint-disable-next-line prefer-template
    .get('https://second-hand-be.herokuapp.com/api/notifications', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
