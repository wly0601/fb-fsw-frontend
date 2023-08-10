import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { FaBookmark } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import priceFormat from '../../../utils/priceFormat';
import CardBookmark from '../../Moleculs/Card/CardBookmark';
// import './Product.Module.css';

function Bookmark({ wishlist }) {
  console.log(wishlist);

  const [userData, setUserData] = useState('');
  const token = localStorage.getItem('token');

  const getUsers = async () => {
    try {
      const responseUsers = await axios.get(
        'https://fp-fsw-backend.vercel.app/api/who-am-i',
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
        <Col>
          <div style={{ paddingLeft: '10px' }}>
            <Link to="/" style={{ color: 'black' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        {wishlist && wishlist.map((list) => {
          console.log(list);
          let user = 'buyer';
          let preview = '';
          if (!!userData && (userData.data.id === list.sellerId)) {
            user = 'seller';
            preview = '/preview';
          }
          return (
            <Col key={list.product.id} md={3} xs={6}>
              <Link to={`../${user}/product/${list.product.id}${preview}`} style={{ textDecoration: 'none', color: 'black' }}>
                <CardBookmark
                  title={list.product.name}
                  type={list.product.category.name}
                  price={priceFormat(list.product.price)}
                  image={list.product.images[0]}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Bookmark;
