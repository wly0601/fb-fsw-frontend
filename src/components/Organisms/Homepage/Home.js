/* eslint-disable array-callback-return */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import Carousel from '../../Moleculs/Carousel/CarouselHomepage';
import TitleList from '../../Atoms/Title/Title';
import ButtonCategory from '../../Atoms/Button/ButtonCategory';
import ItemCard from '../../Moleculs/Card/ItemCard';
import BtnAddProduct from '../../Atoms/Button/BtnAddProduct';
import IMAGES from '../../../data/data';
import './Home.Module.css';

function Home({ productAll }) {
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

  console.log(productAll);
  return (
    <Container fluid>
      <div className="row mt-3">
        <div className="col">
          <Carousel images={IMAGES} />
        </div>
      </div>
      <div className="row mt-5 mx-5">
        <div className="col-12">
          <TitleList title="Telusuri Kategori" />
        </div>
      </div>
      <div className="row mt-3 mx-5">
        <ButtonCategory />
      </div>
      <div className="row mt-3 mx-5">
        {productAll && productAll.map(({
          id, name, category, price, images,
        }) => {
          return (
            <Col key={id} md={3}>
              <Link to="buyer/product/:id" style={{ textDecoration: 'none', color: 'black' }}>
                <ItemCard
                  title={name}
                  type={category.name}
                  price={priceFormat(price)}
                  image={images[0]}
                  imageAlt="Category of Different Pics"
                />
              </Link>
            </Col>
          );
        })}
        {/* {product.length === 0 && setProduct(productAll)} */}
      </div>
      <div className="row mt-3 mb-3 mx-5">
        <BtnAddProduct />
      </div>
    </Container>
  );
}

export default Home;
