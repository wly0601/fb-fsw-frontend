/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOnlyOneProduct } from '../redux/actions/getProductById';
import { getListNotifications } from '../redux/actions/getNotif';
import { getListUser } from '../redux/actions/listUser';
import TemplateBuyerProduct from '../components/Templates/Buyer/TemplateBuyerProduct';

function BuyerProduct() {
  const params = useParams();
  const dispatch = useDispatch();
  const [productById, setProductById] = useState([]);
  const [notif, setNotif] = useState([]);
  const [user, setUser] = useState('');
  const [transaction, setTransaction] = useState([]);

  const {
    productResult,
  } = useSelector((state) => state.getTransactionProductReducer);

  const {
    productByIdResult,
  } = useSelector((state) => state.getProductByIdReducer);

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (productResult) {
      setTransaction(productResult);
    }
  }, [productResult]);

  useEffect(() => {
    if (productByIdResult) {
      setProductById(productByIdResult);
    }
  }, [productByIdResult]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  useEffect(() => {
    if (userResult) {
      setUser(userResult);
    }
  }, [userResult]);

  useEffect(() => {
    let buyer = '';
    if (userResult.id) {
      buyer = `?buyerId=${userResult.id}`;
    }
    dispatch(getOnlyOneProduct(params.id, buyer));
  }, [dispatch]);

  return (
    <div>
      <TemplateBuyerProduct
        productById={productById}
        notif={notif}
        transaction={transaction}
      />
    </div>
  );
}

export default BuyerProduct;
