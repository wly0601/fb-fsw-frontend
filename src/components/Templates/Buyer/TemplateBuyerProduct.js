import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Buyer/ProductPage';

function TemplateBuyerProduct({
  productById, categoryName, productImage, seller, city, notif,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductPage
          productById={productById}
          categoryName={categoryName}
          productImage={productImage}
          city={city}
          seller={seller}
        />
      </Container>
    </>
  );
}

export default TemplateBuyerProduct;
