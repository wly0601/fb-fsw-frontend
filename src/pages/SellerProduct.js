/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getOneProductBySeller } from '../redux/actions/getProductBySeller';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateSellerProduct from '../components/Templates/Seller/TemplateSellerProduct';
import decode from '../utils/decodeToken';

function SellerProduct() {
  const params = useParams();
  const dispatch = useDispatch();
  const [productById, setProductById] = useState([]);
  const [notif, setNotif] = useState([]);
  const [toHomepage, setToHomepage] = useState(false);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  const {
    productBySellerResult,
  } = useSelector((state) => state.getProductBySellerReducer);

  useEffect(() => {
    if (productBySellerResult) {
      setProductById(productBySellerResult);
    }
  }, [productBySellerResult]);

  useEffect(() => {
    dispatch(getOneProductBySeller(params.id));
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  useEffect(() => {
    if (productById.length !== 0) {
      setToHomepage(true);
    }
  }, [productById]);

  if (toHomepage && (decode().data.id !== productById.sellerId)) {
    console.log(decode().data.id, productById, toHomepage);
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <TemplateSellerProduct
        productById={productById}
        notif={notif}
      />
    </div>
  );
}

export default SellerProduct;
