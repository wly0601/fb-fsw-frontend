import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from '../redux/actions/product';
import TemplateListProduct from '../components/Templates/Seller/TemplateListProduct';

function ListProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const {
    productLoading,
    productResult,
    productError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductReducer);

  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productResult) {
      setProduct(productResult);
    }
  }, [productResult]);

  return (
    <>
      {product.length > 0 && (
        <div>
          <Container fluid className="p-0">
            <TemplateListProduct product={product} />
          </Container>
        </div>
      )}
      {product.length === 0 && console.log('Masih Loading Bosq')}
    </>
  );
}

export default ListProduct;
