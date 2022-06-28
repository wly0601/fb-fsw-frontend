/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function BtnAddProduct(props) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="fixed-bottom mb-3" align="center">
      <Link to="/seller/sell">
        <Button className="text-center" variant="secondary" style={{ backgroundColor: '#7126B5', height: '100%' }}>
          <Plus />
          {' '}
          Jual
        </Button>
      </Link>
    </div>
  );
}

export default BtnAddProduct;
