import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './Button.Module.css';

function Category() {
  return (
    <div className="btn-category-scroll" align="left">
      <Button variant="secondary" className="button-category">
        <Search className="me-2" />
        Semua
      </Button>
      <Button variant="secondary" className="button-category">
        <Search className="me-2" />
        Hobi
      </Button>
      <Button variant="secondary" className="button-category">
        <Search className="me-2" />
        Otomotif
      </Button>
      <Button variant="secondary" className="button-category">
        <Search className="me-2" />
        Baju
      </Button>
      <Button variant="secondary" className="button-category">
        <Search className="me-2" />
        Elektronik
      </Button>
      <Button variant="secondary" className="button-category">
        <Search className="me-2" />
        Kesehatan
      </Button>
    </div>
  );
}

export default Category;
