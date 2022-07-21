import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getListNotifications } from '../redux/actions/getNotif';
import { getOnlyOneProduct } from '../redux/actions/getProductById';
import TemplateSellerProduct from '../components/Templates/Seller/TemplateSellerProduct';

function SellerProduct() {
  const params = useParams();
  const dispatch = useDispatch();
  const [notif, setNotif] = useState([]);
  const [oneProduct, setOneProduct] = useState([]);

  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const {
    productByIdResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductByIdReducer);

  useEffect(() => {
    const getId = params.id;
    // console.log(getId);
    document.title = 'Produk Penjual';
    dispatch(getListNotifications());
    dispatch(getOnlyOneProduct(getId));
  }, [dispatch]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  useEffect(() => {
    if (productByIdResult) {
      setOneProduct(productByIdResult);
    }
  }, [productByIdResult]);

  return (
    <div>
      <TemplateSellerProduct
        oneProduct={oneProduct}
        notif={notif}
      />
    </div>
  );
}

export default SellerProduct;
