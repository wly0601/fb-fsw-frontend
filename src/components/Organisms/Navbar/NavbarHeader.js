import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button
} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import '@fontsource/poppins';
import { FaSignInAlt } from 'react-icons/fa'
import './Navigation.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarHeader = () => {
  return (
    <Navbar className="ms-auto navbar" bg="white" expand="lg">
      <Container fluid className='me-3'>
        <Navbar.Brand href="#home" className='logo' ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex test">
            <input
              type="search"
              placeholder="Cari di sini..."
              className="me-2 searchBar"
              aria-label="Search"
            />
            <i className='searchIcon' type='button'><FaSearch /></i>
          </Form>
          <Nav className="flex-grow-1 justify-content-end">
            <Link to='/login' style={{ color: 'white', textDecoration: 'none' }} >
              <Button className='button-menu py-1' style={{ backgroundColor: '#7126B5', borderRadius: '12px' }}><FaSignInAlt className='mx-1' />Masuk</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;