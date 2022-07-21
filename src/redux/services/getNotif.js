import axios from 'axios';

const token = localStorage.getItem('token');

export default function getNotif(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://second-hand-be.herokuapp.com/api/user/${id.toString()}/notifications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
