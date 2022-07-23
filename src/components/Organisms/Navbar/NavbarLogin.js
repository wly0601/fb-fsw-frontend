import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Navbar, Container, Nav, Form, Row, Col, Toast,
  Button, ToastContainer, Dropdown, Offcanvas,
} from 'react-bootstrap';
import {
  FaSearch, FaBell, FaRegUser,
} from 'react-icons/fa';
import {
  faList, faHourglassStart, faHourglassEnd,
  faPenToSquare, faCartShopping, faBookmark, faRightFromBracket,

} from '@fortawesome/free-solid-svg-icons';
import { getListProducts } from '../../../redux/actions/product';
import { logout } from '../../../redux/actions/auth';
import CardToast from '../../Moleculs/Card/CardToast';
import './Navigation.Module.css';

function NavbarLogin({ notif, userData }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getListProducts({
      buyer: userData.id,
      search: `&search=${search}`,
    }));
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const logOut = () => {
    dispatch(logout());
    window.location.href = '/';
  };

  return (
    <>
      <Navbar className="ms-auto navbar" bg="white" expand="lg">
        <Container fluid className="me-3">
          <Navbar.Brand href="../../../" className="navbar-desktop logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="d-flex test">
            <input
              type="search"
              placeholder="Cari di sini..."
              className="me-2 searchBar searchbar-desktop"
              aria-label="Search"
            />
            <i className="searchIcon searchicon-desktop" type="button"><FaSearch /></i>
          </Form>
          <Navbar.Collapse className="navbar-desktop" id="basic-navbar-nav">
            <Form className="d-flex test">
              <input
                type="search"
                placeholder="Cari di sini..."
                className="me-2 searchBar"
                aria-label="Search"
                onChange={handleChangeSearch}
              />
              <Button className="searchIcon" type="submit"><FaSearch style={{ color: '#8A8A8A' }} /></Button>
            </Form>
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
                <Dropdown.Menu style={{ width: '200px', borderRadius: '10px' }}>
                  <Dropdown.Item href="../../../history/seller">
                    <FontAwesomeIcon
                      icon={faHourglassStart}
                      style={{ color: '#7126B5', width: '40px' }}
                    />
                    History Seller
                  </Dropdown.Item>
                  <Dropdown.Item href="../../../history/buyer">
                    <FontAwesomeIcon
                      icon={faHourglassEnd}
                      style={{ color: '#7126B5', width: '40px' }}
                    />
                    History Buyer
                  </Dropdown.Item>
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
                <Dropdown.Menu style={{ width: '200px', borderRadius: '10px' }}>
                  <Dropdown.Item href="../../profile">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{ color: '#7126B5', width: '40px' }}
                    />
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="../../../list/products">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: '#7126B5', width: '40px' }}
                    />
                    Daftar Jual
                  </Dropdown.Item>
                  <Dropdown.Item href="../../list/bookmark">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: '#7126B5', width: '40px' }}
                    />
                    Daftar Simpan
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      style={{ color: '#7126B5', width: '40px' }}
                    />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-mobile">
            <Navbar.Offcanvas style={{ width: '250px' }} id="basic-navbar-nav">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  SecondHand
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex justify-content-end nav">
                  <Nav.Link href="../../../list/notifications">Notifikasi</Nav.Link>
                  <Nav.Link href="../../../list/products">Daftar Jual</Nav.Link>
                  <Nav.Link href="../../profile">Akun Saya</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
      <Row>
        <Col xs={10}>
          <ToastContainer position="top-end" className="notification p-3" limit={3}>
            <Toast position="top-end d-flex justify-content-right" onClose={() => { return setShow(false); }} show={show} delay={3000} autohide>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-5 d-flex justify-content-right"
                  alt=""
                  style={{ marginLeft: '220px', textAlign: 'right' }}
                />
              </Toast.Header>
              <Toast.Body>
                {notif && notif.slice(0, 3).map((result) => {
                  let result2;
                  if (result.msg === 'Berhasil Diterbitkan') {
                    result2 = (
                      <Col xs={12}>
                        <Link to={`/seller/product/${result.productId}/preview`} style={{ textDecoration: 'none', color: 'black' }}>
                          <CardToast
                            title={result.msg}
                            time={result.time}
                            name={result.name}
                            price={result.price}
                            image={result.image}
                          />
                        </Link>
                      </Col>
                    );
                  } else if (result.msg === 'Penawaran Produk') {
                    result2 = (
                      <Col xs={12}>
                        <Link to={`/offering/${result.buyerId}/info`} style={{ textDecoration: 'none', color: 'black' }}>
                          <CardToast
                            title={result.msg}
                            time={result.time}
                            name={result.name}
                            price={result.price}
                            offering={result.bargainPrice}
                            image={result.image}
                          />
                        </Link>
                      </Col>
                    );
                  }
                  return result2;
                })}
                <Link to="/list/notifications" style={{ textDecoration: 'none' }}>
                  <div className="d-grid gap-2">
                    <Button size="lg" style={{ color: 'white', backgroundColor: '#7126B5', borderColor: '#FFFFFF' }}>
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

export default NavbarLogin;
