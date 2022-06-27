import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './Button.Module.css';

function Category() {
  return (
    <div align="left">
      <Button variant="secondary" className="button-category">
        <Search />
        Semua
      </Button>
      <Button variant="secondary" className="button-category">
        <Search />
        Hobi
      </Button>
      <Button variant="secondary" className="button-category">
        <Search />
        Kendaraan
      </Button>
      <Button variant="secondary" className="button-category">
        <Search />
        Baju
      </Button>
      <Button variant="secondary" className="button-category">
        <Search />
        Elektronik
      </Button>
      <Button variant="secondary" className="button-category">
        <Search />
        Kesehatan
      </Button>
    </div>
  );
}

export default Category;
