/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getListUser } from '../redux/actions/listUser';
import { getListNotifications } from '../redux/actions/getNotif';
import { getSoldProductByID } from '../redux/actions/soldProduct';
import TemplateHistorySeller from '../components/Templates/History/TemplateHistorySeller';
import getUser from '../utils/decodeToken';

function HistorySeller() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const [seller, setSeller] = useState([]);
  const [soldProductSeller, setSoldProductSeller] = useState([]);

  if (!token || getUser().toLogin) {
    return (<Navigate to="/login" replace />);
  }

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  const {
    soldProductResult,
  } = useSelector((state) => state.getSoldProductReducer);

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getListNotifications());
    dispatch(getSoldProductByID());
  }, [dispatch]);

  useEffect(() => {
    if (userResult) {
      setSeller(userResult);
    }
    if (soldProductResult) {
      setSoldProductSeller(soldProductResult);
    }
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [userResult, soldProductResult, notifResult]);

  return (
    <div>
      <TemplateHistorySeller
        notif={notif}
        seller={seller}
        soldProductSeller={soldProductSeller}
      />
    </div>
  );
}

export default HistorySeller;
