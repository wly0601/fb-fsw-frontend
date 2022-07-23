import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import CardHistory from '../../Moleculs/Card/CardHistory';
import priceFormat from '../../../utils/priceFormat';

function HistorySeller({ seller, soldProductSeller }) {
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Riwayat Penjualan" />
      </Row>
      <Row>
        <CardSellerBtn
          seller={seller}
        />
      </Row>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          {soldProductSeller.products && soldProductSeller.products.map((soldProduct) => {
            return (
              <CardHistory
                title={soldProduct.name}
                type={priceFormat(soldProduct.price)}
                description={soldProduct.description}
                image={soldProduct.images[0]}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default HistorySeller;
