import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TemplateNotification from '../components/Templates/Notification/TemplateNotification';
import { getListNotifications } from '../redux/actions/getNotif';

function Notification() {
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);

  const {
    notifLoading,
    notifResult,
    notifError,
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
      <TemplateNotification notif={notif} />
    </div>
  );
}

export default Notification;
