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
import PaginatedSeller from '../../Moleculs/Pagination/PaginationSeller';
import priceFormat from '../../../utils/priceFormat';
import './Product.Module.css';

function ListProduct({
  dataProducts, seller, currentPage, meta,
}) {
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Daftar Jual Saya" />
      </Row>
      <Row>
        <CardSellerBtn
          seller={seller}
        />
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
        {dataProducts.length <= 0 && (
        <Col>
          <p> </p>
        </Col>
        )}
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
      <PaginatedSeller currentPage={currentPage} meta={meta} />
    </Container>
  );
}

export default ListProduct;
