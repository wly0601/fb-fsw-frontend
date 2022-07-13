import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import CardSellerOffering from '../../Moleculs/Card/CardSellerOffering';
import CardOffering from '../../Moleculs/Card/CardOffering';
// import './Input.Module.css';

function OfferingInfo({
  buyerInfo, buyerCity, buyerImg, buyerOrder,
}) {
  console.log(buyerOrder);
  const msg = 'Penawaran Produk';
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <div style={{ paddingTop: '30px' }}>
            <Link to="/" style={{ color: 'black' }}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
        </Col>
        <Col xs={10}>
          <CardSellerOffering
            buyerInfo={buyerInfo}
            buyerCity={buyerCity}
            buyerImg={buyerImg}
          />
          {buyerOrder.length <= 0 && (
          <img
            src={`${process.env.PUBLIC_URL}/images/best_interest.png`}
            style={{ width: '50%', justifyContent: 'center', marginLeft: '30%' }}
            alt=""
          />
          )}
          {buyerOrder && buyerOrder.map((order) => {
            return (
              <CardOffering
                title={msg}
                name={order.product.name}
                price={order.product.price}
                offering={`Ditawar ${order.bargainPrice}`}
                image={order.product.images[0]}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default OfferingInfo;
