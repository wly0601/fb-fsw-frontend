/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getListUser } from '../redux/actions/listUser';
import { getListNotifications } from '../redux/actions/getNotif';
import { getHistoryBuyer } from '../redux/actions/historyBuyer';
import TemplateHistoryBuyer from '../components/Templates/History/TemplateHistoryBuyer';
import getUser from '../utils/decodeToken';

function HistoryBuyer() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [buyer, setBuyer] = useState([]);
  const [notif, setNotif] = useState([]);
  const [history, setHistory] = useState([]);

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
    historyResult,
  } = useSelector((state) => state.getHistoryBuyerReducer);

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getListNotifications());
    dispatch(getHistoryBuyer());
  }, [dispatch]);

  useEffect(() => {
    if (userResult) {
      setBuyer(userResult);
    }
    if (notifResult) {
      setNotif(notifResult);
    }
    if (historyResult) {
      setHistory(historyResult);
    }
  }, [notifResult, historyResult, userResult]);

  return (
    <div>
      <TemplateHistoryBuyer
        buyer={buyer}
        notif={notif}
        history={history}
      />
    </div>
  );
}

export default HistoryBuyer;
