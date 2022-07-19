import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from '../redux/actions/product';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateHome from '../components/Templates/Homepage/TemplateHome';

function Homepage() {
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [product, setProduct] = useState([]);
  const [notif, setNotif] = useState([]);
  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);
  const {
    productLoading,
    productResult,
    productError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductReducer);

  useEffect(() => {
    dispatch(getListProducts());
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (productResult && notifResult) {
      setProduct(productResult);
      setNotif(notifResult);
    }
  }, [productResult, notifResult]);

  return (
    <>
      {product.length > 0 && (
      <div>
        <Container fluid className="p-0">
          <TemplateHome product={product} notif={notif} />
        </Container>
      </div>
      )}
      {product.length === 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default Homepage;
