import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ListProduct from '../../Organisms/Seller/ListProduct';

function TemplateListProduct({
  product, notif, sellerName, sellerCity, sellerPhoto,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ListProduct
          dataProducts={product}
          sellerName={sellerName}
          sellerCity={sellerCity}
          sellerPhoto={sellerPhoto}
        />
      </Container>
    </>
  );
}

export default TemplateListProduct;
