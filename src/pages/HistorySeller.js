import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateHistorySeller from '../components/Templates/History/TemplateHistorySeller';

function HistorySeller() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [sellerPhoto, setSellerPhoto] = useState('');
  const [sellerCity, setSellerCity] = useState('');

  const {
    notifLoading,
    notifResult,
    notifError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const fetchData = useCallback(async () => {
    await axios.get(
      'https://second-hand-be.herokuapp.com/api/who-am-i',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then(async (res) => {
        setSellerName(res.data.name);
        setSellerCity(res.data.address);
        setSellerPhoto(res.data.photo);
      });
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  return (
    <div>
      <TemplateHistorySeller
        notif={notif}
        sellerName={sellerName}
        sellerCity={sellerCity}
        sellerPhoto={sellerPhoto}
      />
    </div>
  );
}

export default HistorySeller;
