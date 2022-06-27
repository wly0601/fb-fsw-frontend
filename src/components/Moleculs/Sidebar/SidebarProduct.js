import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import {
  ListGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCube } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import './SidebarProduct.Module.css';

function SidebarProduct() {
  return (
    <div className='card-test'>
      <div className='card-body'>
        <h5 className='px-3 pt-1'>Kategori</h5>
        <ListGroup className='py-2 text-decoration' variant='flush'>
          <ListGroup.Item className='py-3'>
            <Link to='' className='text-decoration'>
              <i type='button' className='link'><FaCube /> Semua Product</i>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className='py-3'>
            <Link to='' className='text-decoration'>
              <i type='button' className='link'><FaRegHeart style={{ color: '#8A8A8A' }} /> Diminati</i>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className='py-3'>
            <Link to='' className='text-decoration'>
              <i type='button' className='link'><FaDollarSign style={{ color: '#8A8A8A' }} /> Terjual</i>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}
export default SidebarProduct;