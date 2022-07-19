import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getSellerListProducts } from '../redux/actions/sellerProduct';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateListProduct from '../components/Templates/Seller/TemplateListProduct';

function ListProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [notif, setNotif] = useState([]);
  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);
  const {
    productResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getSellerProductReducer);

  useEffect(() => {
    dispatch(getSellerListProducts());
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
            <TemplateListProduct product={product} notif={notif} />
          </Container>
        </div>
      )}
      {product.length === 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default ListProduct;
