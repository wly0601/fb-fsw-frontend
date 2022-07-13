import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import Title from '../../Atoms/Title/Title';
import BtnProductStatus from '../../Atoms/Button/BtnProductStatus';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import ItemCard from '../../Moleculs/Card/ItemCard';
import './Product.Module.css';

function ListProduct({ dataProducts }) {
  const priceFormat = (data) => {
    const priceStr = data.toString();
    let i = priceStr.length;
    let renderPrice = '';
    let counter = 0;

    while (i > 0) {
      renderPrice = priceStr[i - 1] + renderPrice;
      i -= 1;
      counter += 1;
      if (counter === 3 && i !== 0) {
        renderPrice = `.${renderPrice}`;
        counter = 0;
      }
    }

    return `Rp ${renderPrice}`;
  };
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Daftar Jual Saya" />
      </Row>
      <Row>
        <CardSellerBtn />
      </Row>
      <Row>
        <BtnProductStatus />
      </Row>
      <Row>
        <Col className="card-sidebar">
          <Sidebar />
        </Col>
        <Col>
          <div className="card content" type="button">
            <Link
              to="../../seller/sell"
              style={{ textDecoration: 'none', color: 'grey', textAlign: 'center' }}
            >
              <FaPlus />
              {' '}
              <p className="pt-2">Tambah Produk</p>
            </Link>
          </div>
        </Col>
        {dataProducts && dataProducts.map(({
          id, name, description, price, images,
        }) => {
          return (
            <Col key={id} md={3} xs={6}>
              <Link to={`../seller/product/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <ItemCard
                  title={name}
                  type={description}
                  price={priceFormat(price)}
                  image={images[0]}
                  imageAlt="Category of Different Pics"
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ListProduct;
