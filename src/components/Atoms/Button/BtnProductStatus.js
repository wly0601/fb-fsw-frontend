import { Button } from 'react-bootstrap';
import {
  FaCube, FaRegHeart, FaDollarSign, FaAngleRight,
} from 'react-icons/fa';
import './Button.Module.css';

function BtnProductStatus() {
  return (
    <div className="btn-product-status" align="left">
      <Button variant="secondary" className="button-category">
        <FaCube className="me-2" />
        Produk
      </Button>
      <Button variant="secondary" className="button-category">
        <FaRegHeart className="me-2" />
        Diminati
      </Button>
      <Button variant="secondary" className="button-category">
        <FaDollarSign className="me-2" />
        Terjual
      </Button>
    </div>
  );
}

export default BtnProductStatus;
