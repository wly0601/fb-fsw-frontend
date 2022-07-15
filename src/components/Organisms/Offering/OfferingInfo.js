import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardSellerOffering from '../../Moleculs/Card/CardSellerOffering';
import CardOffering from '../../Moleculs/Card/CardOffering';
import priceFormat from '../../../utils/priceFormat';
// import './Input.Module.css';

function OfferingInfo({
  buyerInfo, buyerCity, buyerImg, buyerOrder, buyerNumber,
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
          <Title title="Daftar Produkmu Yang Ditawar" />
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
                price={priceFormat(order.product.price)}
                offering={`Ditawar ${priceFormat(order.bargainPrice)}`}
                image={order.product.images[0]}
                buyerOrder={order}
                buyerInfo={buyerInfo}
                buyerCity={buyerCity}
                buyerImg={buyerImg}
                buyerNumber={buyerNumber}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default OfferingInfo;
