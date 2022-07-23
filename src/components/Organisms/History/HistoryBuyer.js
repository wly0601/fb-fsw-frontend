import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import BtnProductStatus from '../../Atoms/Button/BtnProductStatus';
import CardBuyerBtn from '../../Moleculs/Card/CardBuyerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import CardHistory from '../../Moleculs/Card/CardHistory';
// import './Product.Module.css';

function HistoryBuyer({
  history, buyerName, buyerCity, buyerPhoto,
}) {
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Riwayat Pembelian" />
      </Row>
      <Row>
        <CardBuyerBtn
          buyerName={buyerName}
          buyerCity={buyerCity}
          buyerPhoto={buyerPhoto}
        />
      </Row>
      <Row>
        <BtnProductStatus />
      </Row>
      <Row>
        <Col className="card-sidebar">
          <Sidebar />
        </Col>
        {history && history.map((buyer) => {
          console.log(buyer);
          return (
            <Col md={3} xs={6}>
              <CardHistory
                title={buyer.msg}
                type={buyer.price}
                description={buyer.bargainPrice}
                image={buyer.image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HistoryBuyer;
