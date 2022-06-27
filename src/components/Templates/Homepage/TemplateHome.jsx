import NavbarHeader from '../../Organisms/Navbar/NavbarHeader'
import Home from '../../Organisms/Homepage/Home'
import { Container } from 'react-bootstrap';

const TemplateHome = () => {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Home />
      </Container>
    </>
  )
};

export default TemplateHome;