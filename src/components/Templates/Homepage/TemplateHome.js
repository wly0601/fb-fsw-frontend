import { Container } from 'react-bootstrap';
import NavbarHeader from '../../Organisms/Navbar/NavbarHeader';
import Home from '../../Organisms/Homepage/Home';

function TemplateHome({ product, data }) {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Home productAll={product} data={data} />
      </Container>
    </>
  );
}

export default TemplateHome;
