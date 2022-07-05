import { Container } from 'react-bootstrap';
import NavbarOffering from '../../Organisms/Navbar/NavbarOffering';
import OfferingInfo from '../../Organisms/Offering/OfferingInfo';

function TemplateOfferingInfo() {
  return (
    <>
      <NavbarOffering />
      <Container fluid>
        <OfferingInfo />
      </Container>
    </>
  );
}

export default TemplateOfferingInfo;
