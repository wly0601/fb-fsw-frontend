import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import HistoryBuyer from '../../Organisms/History/HistoryBuyer';

function TemplateHistoryBuyer({
  notif, history, buyer,
}) {
  console.log(history);
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <HistoryBuyer
          buyer={buyer}
          history={history}
        />
      </Container>
    </>
  );
}

export default TemplateHistoryBuyer;
