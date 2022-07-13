import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NavbarHeader from '../../Organisms/Navbar/NavbarHeader';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import Home from '../../Organisms/Homepage/Home';
import PaginatedItems from '../../Moleculs/Pagination/Pagination';

function TemplateHome({
  product, notif, data, currentPage,
}) {
  console.log(currentPage, 'line12');
  const { isLoggedIn } = useSelector((state) => { return state.auth; });

  return isLoggedIn ? (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <Home productAll={product} data={data} currentPage={currentPage} />
        {/* <PaginatedItems /> */}
      </Container>
    </>
  ) : (
    <>
      <NavbarHeader notif={notif} />
      <Container fluid>
        <Home productAll={product} data={data} currentPage={currentPage} />
        {/* <PaginatedItems /> */}
      </Container>
    </>
  );
}

export default TemplateHome;
