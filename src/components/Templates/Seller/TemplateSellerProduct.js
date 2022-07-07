import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Seller/ProductPage';

function TemplateSellerProduct({
  productById, categoryName, productImage, seller, city,
}) {
  return (
    <>
      <NavbarLogin />
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

export default TemplateSellerProduct;
