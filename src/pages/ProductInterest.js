import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateProductInterest from '../components/Templates/Seller/TemplateProductInterest';

function ProductInterest() {
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
      <TemplateProductInterest notif={notif} />
    </div>
  );
}

export default ProductInterest;
