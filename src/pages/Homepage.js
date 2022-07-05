import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getListProducts } from '../redux/actions/product';
import TemplateHome from '../components/Templates/Homepage/TemplateHome';

function Homepage() {
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
    if (productLoading) {
      console.log('Loading...');
    } else if (productResult) {
      setProduct(productResult)
    } else if (productError) {
      console.log(productError);
    }
  }, [dispatch]);

  return (
    <div>
      <Container fluid className="p-0">
        <TemplateHome product={product} />
      </Container>
    </div>
  );
}

export default Homepage;
