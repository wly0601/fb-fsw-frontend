import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardBuyerBtn from '../../Moleculs/Card/CardBuyerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import CardHistory from '../../Moleculs/Card/CardHistory';

function HistoryBuyer({ history, buyer }) {
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Riwayat Pembelian" />
      </Row>
      <Row>
        <CardBuyerBtn
          buyer={buyer}
        />
      </Row>
      <Row>
        <Col md={3} xs={6}>
          <Sidebar />
        </Col>
        {history && history.map((historyBuyer) => {
          return (
            <Col md={3} xs={6}>
              <CardHistory
                title={historyBuyer.msg}
                type={historyBuyer.price}
                description={historyBuyer.bargainPrice}
                image={historyBuyer.image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HistoryBuyer;
