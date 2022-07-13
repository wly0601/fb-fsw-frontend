import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import HistorySeller from '../../Organisms/History/HistorySeller';

function TemplateHistorySeller({
  notif, sellerName, sellerCity, sellerPhoto,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <HistorySeller
          sellerName={sellerName}
          sellerCity={sellerCity}
          sellerPhoto={sellerPhoto}
        />
      </Container>
    </>
  );
}

export default TemplateHistorySeller;
