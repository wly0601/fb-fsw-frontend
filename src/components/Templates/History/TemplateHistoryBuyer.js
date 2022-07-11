import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import HistoryBuyer from '../../Organisms/History/HistoryBuyer';

function TemplateHistoryBuyer() {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <HistoryBuyer />
      </Container>
    </>
  );
}

export default TemplateHistoryBuyer;
