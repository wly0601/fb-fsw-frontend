/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProductBySeller } from '../redux/actions/getProductBySeller';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateSellerProductEdit from '../components/Templates/Seller/TemplateSellerProductEdit';

function SellerProductEdit() {
  const params = useParams();
  const dispatch = useDispatch();
  const [productById, setProductById] = useState([]);
  const [notif, setNotif] = useState([]);

  const {
    productBySellerResult,
  } = useSelector((state) => state.getProductBySellerReducer);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  useEffect(() => {
    dispatch(getOneProductBySeller(params.id));
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (productBySellerResult) {
      setProductById(productBySellerResult);
    }
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult, productBySellerResult]);

  console.log(productById);
  return (
    <div>
      <TemplateSellerProductEdit
        productById={productById}
        notif={notif}
      />
    </div>
  );
}

export default SellerProductEdit;
