import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import CardHistory from '../../Moleculs/Card/CardHistory';
import priceFormat from '../../../utils/priceFormat';
// import './Product.Module.css';

function HistorySeller({
  sellerName, sellerCity, sellerPhoto, soldProductSeller,
}) {
  console.log(soldProductSeller);
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Riwayat Penjualan" />
      </Row>
      <Row>
        <CardSellerBtn
          sellerName={sellerName}
          sellerCity={sellerCity}
          sellerPhoto={sellerPhoto}
        />
      </Row>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          {soldProductSeller.products && soldProductSeller.products.map((soldProduct) => {
            console.log(soldProduct);
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
