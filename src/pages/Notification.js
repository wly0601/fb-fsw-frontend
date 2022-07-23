import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TemplateNotification from '../components/Templates/Notification/TemplateNotification';
import { getListNotifications } from '../redux/actions/getNotif';

function Notification() {
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  useEffect(() => {
    dispatch(getListNotifications());
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [dispatch, notifResult]);

  return (
    <div>
      <TemplateNotification notif={notif} />
    </div>
  );
}

export default Notification;
