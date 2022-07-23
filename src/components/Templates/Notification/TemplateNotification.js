import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import UserNotification from '../../Organisms/Notification/UserNotification';

function TemplateNotification({ notif }) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <UserNotification notif={notif} />
      </Container>
    </>
  );
}

export default TemplateNotification;
