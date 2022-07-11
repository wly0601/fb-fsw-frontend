import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import Title from '../../Atoms/Title/Title';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import ItemCard from '../../Moleculs/Card/ItemCard';
import './Product.Module.css';

function ListProduct({ dataProducts }) {
  const [userData, setUserData] = useState('');

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

  const token = localStorage.getItem('token');

  const getUsers = async () => {
    try {
      const responseUsers = await axios.get(
        'https://second-hand-be.herokuapp.com/api/who-am-i',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const dataUsers = await responseUsers;
      setUserData(dataUsers);
      console.log(dataUsers.data.id, 'line 55');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Title title="Daftar Jual Saya" />
      </Row>
      <Row>
        <CardSellerBtn />
      </Row>
      <Row>
        <Col>
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
        {(dataProducts && dataProducts).map((result) => {
          console.log(result.name);
          return (
            <Col key={result.id} md={3}>
              <Link to={`../seller/product/${result.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <ItemCard
                  title={result.name}
                  price={priceFormat(result.price)}
                  image={result.images[0]}
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
