import { Container } from 'react-bootstrap';
import NavbarHeader from '../../Organisms/Navbar/NavbarHeader';
import Home from '../../Organisms/Homepage/Home';

function TemplateHome() {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Home />
      </Container>
    </>
  );
}

export default TemplateHome;
