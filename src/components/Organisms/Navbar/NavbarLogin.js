/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {
  FaSearch, FaBell, FaRegUser, FaListUl, FaSignInAlt,
} from 'react-icons/fa';
import { logout } from '../../../actions/auth';

import './Navigation.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarLogin() {
  const userLogin = useSelector((state) => { return state.auth; });
  const { user } = userLogin;
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    window.location.href = '/';
  };
  return (
    <Navbar className="ms-auto navbar" bg="white" expand="lg">
      <Container fluid className="me-3">
        <Navbar.Brand href="#home" className="logo" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex test">
            <input
              type="search"
              placeholder="Cari di sini..."
              className="me-2 searchBar"
              aria-label="Search"
            />
            <i className="searchIcon" type="button"><FaSearch /></i>
          </Form>
          <Nav className="flex-grow-1 justify-content-end nav">
            <Nav.Link>
              <FontAwesomeIcon icon={faList} />
            </Nav.Link>
            <NavDropdown>
              <NavDropdown.Item>
                <Link to="../history/seller" className="nav-history">
                  History Seller
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="../history/buyer" className="nav-history">
                  History Buyer
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">
              <FaBell className="link" />
            </Nav.Link>
            <NavLink>
              <i type="button" className="button-fa">
                <FaRegUser className="link" />
              </i>
            </NavLink>
            <NavDropdown>
              <Nav.Link>
                <Link to="/profile">
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/seller/sell">
                  Daftar Jual
                </Link>
              </Nav.Link>
              <Nav.Link onClick={logOut}>
                Logout
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
