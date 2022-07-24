/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from '../redux/actions/product';
import { getListNotifications } from '../redux/actions/getNotif';
import { getListUser } from '../redux/actions/listUser';
import TemplateHome from '../components/Templates/Homepage/TemplateHome';

function Homepage() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [notif, setNotif] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [userData, setUserData] = useState([]);

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  const {
    productResult,
  } = useSelector((state) => state.getProductReducer);

  const {
    productMetaResult,
  } = useSelector((state) => state.getProductMetaReducer);

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  useEffect(() => {
    if (productResult) {
      setProduct(productResult);
    }
    if (notifResult) {
      setNotif(notifResult);
    }
    if (productMetaResult) {
      setMeta(productMetaResult);
    }
  }, [productResult, notifResult, productMetaResult]);

  useEffect(() => {
    if (userResult) {
      setUserData(userResult);
    }
    dispatch(getListProducts({
      buyer: userResult.id,
    }));
    dispatch(getListNotifications());
  }, [userResult]);

  return (
    <>
      {product.length >= 0 && (
      <div>
        <Container fluid className="p-0">
          <TemplateHome
            product={product}
            notif={notif}
            currentPage={currentPage}
            meta={meta}
            productResult={productResult}
            userData={userData}
          />
        </Container>
      </div>
      )}
      {product.length <= 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default Homepage;
