import React from 'react';
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import getUser from '../../../redux/services/getUser';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ListProduct from '../../Organisms/Seller/ListProduct';

function TemplateListProduct({
  product, notif, seller, currentPage, meta,
}) {
  if (getUser().toLogin) {
    <Navigate to="/login" />;
  }
  return (
    <div>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ListProduct
          dataProducts={product}
          seller={seller}
          currentPage={currentPage}
          meta={meta}
        />
      </Container>
    </div>
  );
}

export default TemplateListProduct;
