import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPageSeller from '../../Organisms/Seller/ProductPageSeller';

function TemplateSellerProductEdit({
  productById, categoryName, productImage, seller, city,
}) {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ProductPageSeller
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

export default TemplateSellerProductEdit;
