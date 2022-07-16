import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NavbarHeader from '../../Organisms/Navbar/NavbarHeader';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import Home from '../../Organisms/Homepage/Home';

function TemplateHome({
  product, notif, data, currentPage, meta, productResult,
}) {
  console.log(meta, 'line12');
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const token = localStorage.getItem('token');
  const handleLogin = () => {
    if (!token) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return isLoggedIn ? (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <Home
          productAll={product}
          data={data}
          currentPage={currentPage}
          meta={meta}
          productResult={productResult}
        />
        {/* <PaginatedItems /> */}
      </Container>
    </>
  ) : (
    <>
      <NavbarHeader notif={notif} />
      <Container fluid>
        <Home
          productAll={product}
          data={data}
          currentPage={currentPage}
          meta={meta}
          productResult={productResult}
        />
        {/* <PaginatedItems /> */}
      </Container>
    </>
  );
}

export default TemplateHome;
