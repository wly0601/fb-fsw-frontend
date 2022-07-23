import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavbarHeader from '../../Organisms/Navbar/NavbarHeader';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import Home from '../../Organisms/Homepage/Home';

function TemplateHome({
  product, notif, data, currentPage, meta, productResult, userData, userResult,
}) {
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
      <NavbarLogin notif={notif} userData={userData} />
      <Container fluid>
        <Home
          productAll={product}
          data={data}
          currentPage={currentPage}
          meta={meta}
          productResult={productResult}
          userData={userData}
        />
      </Container>
    </>
  ) : (
    <>
      <NavbarHeader />
      <Container fluid>
        <Home
          productAll={product}
          data={data}
          currentPage={currentPage}
          meta={meta}
          productResult={productResult}
          userData={userData}
        />
      </Container>
    </>
  );
}

export default TemplateHome;
