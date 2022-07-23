import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductInterest from '../../Organisms/Seller/ProductInterest';

function TemplateProductInterest({
  notif, seller, interest,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductInterest
          seller={seller}
          interest={interest}
        />
      </Container>
    </>
  );
}

export default TemplateProductInterest;
