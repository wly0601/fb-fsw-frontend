import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Buyer/ProductPage';

function TemplateBuyerProduct({
  productById, categoryName, productImage,
  seller, city, notif, active, transaction,
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
          active={active}
          transaction={transaction}
        />
      </Container>
    </>
  );
}

export default TemplateBuyerProduct;
