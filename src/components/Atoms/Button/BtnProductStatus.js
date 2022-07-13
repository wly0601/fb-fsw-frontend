import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaCube, FaRegHeart, FaDollarSign, FaAngleRight,
} from 'react-icons/fa';
import './Button.Module.css';

function BtnProductStatus() {
  return (
    <div className="btn-product-status" align="left">
      <Link to="/list/products">
        <Button variant="secondary" className="button-category">
          <FaCube className="me-2" />
          Produk
        </Button>
      </Link>
      <Link to="/list/interest">
        <Button variant="secondary" className="button-category">
          <FaRegHeart className="me-2" />
          Diminati
        </Button>
      </Link>
      <Link to="/history/seller">
        <Button variant="secondary" className="button-category">
          <FaDollarSign className="me-2" />
          Terjual
        </Button>
      </Link>
    </div>
  );
}

export default BtnProductStatus;
