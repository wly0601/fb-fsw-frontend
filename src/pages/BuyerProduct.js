/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getListNotifications } from '../redux/actions/getNotif';
import { getOnlyOneProduct } from '../redux/actions/getProductById';
import TemplateBuyerProduct from '../components/Templates/Buyer/TemplateBuyerProduct';

function BuyerProduct() {
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
    document.title = 'Produk Pembeli';
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
    <>
      <div>
        <TemplateBuyerProduct
          oneProduct={oneProduct}
          notif={notif}
        />
      </div>
    </>
  );
}

export default BuyerProduct;
