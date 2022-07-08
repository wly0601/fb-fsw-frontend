/* eslint-disable consistent-return */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  NavDropdown,
  NavLink,
  NavItem,
} from 'react-bootstrap';
import {
  FaSearch, FaSignInAlt, FaBell, FaRegUser, FaListUl,
} from 'react-icons/fa';
import '@fontsource/poppins';

import './Navigation.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../../../redux/actions/auth';

function NavbarHeader(props) {
  const userLogin = useSelector((state) => { return state.auth; });
  const { user } = userLogin;
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Navbar className="ms-auto navbar" bg="white" expand="lg">
      <Container fluid className="me-3">
        <Navbar.Brand href="../../" className="logo" />
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
            {user ? (
              <Nav>
                <Nav.Link href="#link"><FaListUl className="link" /></Nav.Link>
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
                      Daftar Jual
                    </Nav.Link>
                    <NavDropdown.Item onClick={logOut}>
                      Logout
                    </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                  <Button className="button-menu py-1" href="/login" style={{ backgroundColor: '#7126B5', borderRadius: '12px' }}>
                    <FaSignInAlt className="mx-1" />
                    Masuk
                  </Button>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
