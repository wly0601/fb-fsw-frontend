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
import { faList } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
  ToastContainer,
  Dropdown,
  Toast,
} from 'react-bootstrap';
import {
  FaSearch, FaSignInAlt, FaBell, FaRegUser, FaListUl,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fontsource/poppins';

import CardNotification from '../../Moleculs/Card/CardNotification';
import './Navigation.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../../../redux/actions/auth';

function NavbarHeader({ notif }) {
  const [show, setShow] = useState(false);
  const userLogin = useSelector((state) => { return state.auth; });
  const { user } = userLogin;
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <>
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
              <Nav className="flex-grow-1 justify-content-end nav">
              <Dropdown className="mt-1">
                <Dropdown.Toggle
                  className="btn-toggle"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: 'none',
                    zIndex: '1',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faList}
                    style={{
                      zIndex: 2,
                    }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="../../history/seller">History Seller</Dropdown.Item>
                  <Dropdown.Item href="../../history/buyer">History Buyer</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                onClick={() => { return setShow(true); }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  overflow: 'hidden',
                }}
              >
                <FaBell className="link" />
              </Button>
              <Dropdown className="mt-1">
                <Dropdown.Toggle
                  className="btn-toggle"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: 'none',
                    zIndex: '1',
                  }}
                >
                  <FaRegUser className="link" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="../profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Nav.Link href="../../profile">
                <FaRegUser className="link" />
              </Nav.Link> */}
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
    <Row>
    <Col xs={10}>
      <ToastContainer position="top-end" className="notification p-3">
        <Toast position="top-end d-flex justify-content-right" onClose={() => { return setShow(false); }} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-5 d-flex justify-content-right"
              alt=""
              style={{ marginLeft: '220px', textAlign: 'right' }}
            />
            {/* <small>08 Jul, 20.04</small> */}
          </Toast.Header>
          <Toast.Body>
            {notif && notif.slice(0, 3).map((result) => {
              return (
                <Col xs={12}>
                  <CardNotification
                    title={result.msg}
                    name={result.name}
                    price={result.price}
                    image={result.image}
                    imageAlt="Gambar jam tangan"
                  />
                </Col>
              );
            })}
            <Link to="/offering/info" style={{ textDecoration: 'none' }}>
              <div className="d-grid gap-2">
                <Button variant="outline-success" size="lg" style={{ color: 'black' }}>
                  Lihat Semua
                </Button>
              </div>
            </Link>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Col>
    </Row>
    </>
  );
}

export default NavbarHeader;
