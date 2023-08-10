import axios from 'axios';
import { Navigate } from 'react-router-dom';
import checkUser from '../../utils/decodeToken';

const token = localStorage.getItem('token');

export default function getIdUser(id) {
  return axios
    // eslint-disable-next-line prefer-template
    .get(`https://fp-fsw-backend.vercel.app/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
}
