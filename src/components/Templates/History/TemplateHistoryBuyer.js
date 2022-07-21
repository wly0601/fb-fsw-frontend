import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import HistoryBuyer from '../../Organisms/History/HistoryBuyer';

function TemplateHistoryBuyer({
  notif, history, buyerName, buyerCity, buyerPhoto,
}) {
  console.log(history);
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <HistoryBuyer
          buyerName={buyerName}
          buyerCity={buyerCity}
          buyerPhoto={buyerPhoto}
          history={history}
        />
      </Container>
    </>
  );
}

export default TemplateHistoryBuyer;
