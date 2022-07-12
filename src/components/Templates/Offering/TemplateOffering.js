import { Container } from 'react-bootstrap';
import NavbarOffering from '../../Organisms/Navbar/NavbarOffering';
import OfferingInfo from '../../Organisms/Offering/OfferingInfo';

function TemplateOfferingInfo({
  buyerInfo, buyerCity, buyerImg, buyerOrder,
}) {
  console.log(buyerOrder);
  return (
    <>
      <NavbarOffering />
      <Container fluid>
        <OfferingInfo
          buyerInfo={buyerInfo}
          buyerCity={buyerCity}
          buyerImg={buyerImg}
          buyerOrder={buyerOrder}
        />
      </Container>
    </>
  );
}

export default TemplateOfferingInfo;
