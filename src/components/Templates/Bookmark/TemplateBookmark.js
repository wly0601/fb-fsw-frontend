import { Container } from 'react-bootstrap';
import NavbarBookmark from '../../Organisms/Navbar/NavbarBookmark';
import Bookmark from '../../Organisms/Bookmark/Bookmark';

function TemplateBookmark() {
  return (
    <>
      <NavbarBookmark />
      <Container fluid>
        <Bookmark />
      </Container>
    </>
  );
}

export default TemplateBookmark;
