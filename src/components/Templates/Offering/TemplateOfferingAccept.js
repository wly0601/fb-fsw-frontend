import { Container } from 'react-bootstrap';
import NavbarOffering from '../../Organisms/Navbar/NavbarOffering';
import OfferingAccept from '../../Organisms/Offering/OfferingAccept';

function TemplateOfferingAccept() {
  return (
    <>
      <NavbarOffering />
      <Container fluid>
        <OfferingAccept />
      </Container>
    </>
  );
}

export default TemplateOfferingAccept;
