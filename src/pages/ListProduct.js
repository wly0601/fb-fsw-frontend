/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListUser } from '../redux/actions/listUser';
import { getSellerListProducts } from '../redux/actions/sellerProduct';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateListProduct from '../components/Templates/Seller/TemplateListProduct';
import getUser from '../utils/decodeToken';

function ListProduct() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [notif, setNotif] = useState([]);
  const [seller, setSeller] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({});

  if (!token || getUser().toLogin) {
    return (<Navigate to="/login" replace />);
  }

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  const {
    productResult,
  } = useSelector((state) => state.getSellerProductReducer);

  const {
    productMetaResult,
  } = useSelector((state) => state.getProductMetaReducer);

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getSellerListProducts());
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (userResult) {
      setSeller(userResult);
    }
    if (productResult) {
      setProduct(productResult);
    }
    if (notifResult) {
      setNotif(notifResult);
    }
    if (productMetaResult) {
      setMeta(productMetaResult);
    }
  }, [userResult, productResult, notifResult, productMetaResult]);

  return (
    <>
      {!!product && (
        <div>
          <Container fluid className="p-0">
            <TemplateListProduct
              product={product}
              notif={notif}
              seller={seller}
              currentPage={currentPage}
              meta={meta}
            />
          </Container>
        </div>
      )}
      {product.length === 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default ListProduct;
