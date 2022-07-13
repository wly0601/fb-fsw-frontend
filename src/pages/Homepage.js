import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from '../redux/actions/product';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateHome from '../components/Templates/Homepage/TemplateHome';
import PaginatedItems from '../components/Moleculs/Pagination/Pagination';

function Homepage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(5);
  const [data, setData] = useState('');
  const [product, setProduct] = useState([]);
  const [notif, setNotif] = useState([]);
  const {
    notifLoading,
    notifResult,
    notifError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const {
    productLoading,
    productResult,
    productError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductReducer);

  useEffect(() => {
    dispatch(getListProducts(currentPage));
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (productResult) {
      setProduct(productResult);
    }
  }, [productResult]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  return (
    <>
      {product.length >= 0 && (
      <div>
        <Container fluid className="p-0">
          <TemplateHome product={product} notif={notif} currentPage={currentPage} />
          {/* <PaginatedItems /> */}
        </Container>
      </div>
      )}
      {product.length === 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default Homepage;
