import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Navbar, Container, Nav, Form, Button,
} from 'react-bootstrap';
import {
  FaSearch, FaSignInAlt,
} from 'react-icons/fa';
import './Navigation.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getListProducts } from '../../../redux/actions/product';

function NavbarHeader() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(getListProducts({ search: `&search=${input}` }));
    }
  };

  return (
    <Navbar className="ms-auto navbar" bg="white" expand="lg">
      <Container fluid className="me-3">
        <Navbar.Brand href="../../" className="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex test" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Cari di sini..."
              className="me-2 searchBar"
              aria-label="Search"
              onChange={handleChangeInput}
            />
            <i className="searchIcon" type="submit"><FaSearch className="me-2" /></i>
          </Form>
          <Nav className="flex-grow-1 justify-content-end nav">
            <Nav>
              <Button className="button-menu py-1" href="/login" style={{ backgroundColor: '#7126B5', borderRadius: '12px' }}>
                <FaSignInAlt className="mx-1" />
                Masuk
              </Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
