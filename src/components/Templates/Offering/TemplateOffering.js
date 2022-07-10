import { Container } from 'react-bootstrap';
import NavbarOffering from '../../Organisms/Navbar/NavbarOffering';
import OfferingInfo from '../../Organisms/Offering/OfferingInfo';

function TemplateOfferingInfo({ buyerInfo, buyerCity }) {
  return (
    <>
      <NavbarOffering />
      <Container fluid>
        <OfferingInfo
          buyerInfo={buyerInfo}
          buyerCity={buyerCity}
        />
      </Container>
    </>
  );
}

export default TemplateOfferingInfo;
