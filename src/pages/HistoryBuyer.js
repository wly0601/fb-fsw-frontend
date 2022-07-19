import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateHistoryBuyer from '../components/Templates/History/TemplateHistoryBuyer';

function HistoryBuyer() {
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);
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
      <TemplateHistoryBuyer notif={notif} />
    </div>
  );
}

export default HistoryBuyer;
