import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Buyer/ProductPage';

function TemplateBuyerProduct({
  productById, notif, transaction,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductPage
          productById={productById}
          transaction={transaction}
        />
      </Container>
    </>
  );
}

export default TemplateBuyerProduct;
