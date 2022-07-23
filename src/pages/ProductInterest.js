/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListUser } from '../redux/actions/listUser';
import { getListNotifications } from '../redux/actions/getNotif';
import { getListProductInterest } from '../redux/actions/productInterest';
import TemplateProductInterest from '../components/Templates/Seller/TemplateProductInterest';

function ProductInterest() {
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const [interest, setInterest] = useState([]);
  const [seller, setSeller] = useState([]);

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  const {
    interestResult,
  } = useSelector((state) => state.getProductInterestReducer);

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getListNotifications());
    dispatch(getListProductInterest());
  }, [dispatch]);

  useEffect(() => {
    if (userResult) {
      setSeller(userResult);
    }
    if (notifResult) {
      setNotif(notifResult);
    }
    if (interestResult) {
      setInterest(interestResult);
    }
  }, [notifResult, interestResult, userResult]);

  return (
    <div>
      <TemplateProductInterest
        notif={notif}
        seller={seller}
        interest={interest}
      />
    </div>
  );
}

export default ProductInterest;
