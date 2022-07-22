import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPageEdit from '../../Organisms/Seller/ProductPageEdit';

function TemplateSellerProduct({
  productById, categoryName, productImage, seller, city, notif,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductPageEdit
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
