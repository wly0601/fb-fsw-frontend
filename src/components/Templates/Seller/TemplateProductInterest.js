import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductInterest from '../../Organisms/Seller/ProductInterest';

function TemplateProductInterest({
  notif, sellerName, sellerCity, sellerPhoto, interest,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductInterest
          sellerName={sellerName}
          sellerCity={sellerCity}
          sellerPhoto={sellerPhoto}
          interest={interest}
        />
      </Container>
    </>
  );
}

export default TemplateProductInterest;
