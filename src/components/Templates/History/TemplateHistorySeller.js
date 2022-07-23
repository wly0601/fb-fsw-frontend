import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import HistorySeller from '../../Organisms/History/HistorySeller';

function TemplateHistorySeller({
  notif, seller, soldProductSeller,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <HistorySeller
          seller={seller}
          soldProductSeller={soldProductSeller}
        />
      </Container>
    </>
  );
}

export default TemplateHistorySeller;
