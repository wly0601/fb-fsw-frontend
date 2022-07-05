import { Container } from 'react-bootstrap';
import NavbarHeader from '../../Organisms/Navbar/NavbarHeader';
import Home from '../../Organisms/Homepage/Home';

function TemplateHome({product}) {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Home productAll={product} />
      </Container>
    </>
  );
}

export default TemplateHome;
