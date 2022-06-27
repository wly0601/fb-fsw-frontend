import React from 'react';
import Title from '../../Atoms/Title/Title'
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import ItemCard from '../../Moleculs/Card/ItemCard';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import './Product.Module.css';

const ProductPage = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Title title='Daftar Jual Saya' />
        </Row>
        <Row>
          <CardSellerBtn />
        </Row>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <div className='card content' type='button'>
              <FaPlus /> <p className='pt-2'>Tambah Produk</p>
            </div>
          </Col>
          {Array.from({ length: 2 }).map((_, idx) => (
            <Col>
              <ItemCard
                title='Jam Tangan Casio'
                type='Aksesoris'
                price='Rp 250.000'
                image='https://placeimg.com/165/100/any'
                imageAlt='Gambar jam tangan'
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ProductPage;