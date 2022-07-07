/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Container, Card, Row, Col, Button,
} from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import VerticalModals from '../Modal/ModalAccept';
import './Card.Module.css';

function CardHistory(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [hiddenButton, setHiddenButton] = React.useState(false);
  const {
    title, name, price, image, imageAlt, offering,
  } = props;

  const handleHiddenButton = (e) => {
    setHiddenButton(true);
  };

  useEffect(() => {
    handleHiddenButton();
  }, [hiddenButton]);

  return (
    <Container>
      <Title title="Daftar Produkmu Yang Ditawar" />
      <Card className="card-items-offering" style={{ borderRadius: '16px' }}>
        <Row>
          <Col xs={2}>
            <Card.Img src={image} className="mt-4 mx-3 card-img-top image-offering" alt={imageAlt} />
          </Col>
          <Col xs={10}>
            <Card.Body>
              <Card.Title style={{ fontSize: '10px', color: 'grey' }}>{title}</Card.Title>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{price}</Card.Text>
              <Card.Text>{offering}</Card.Text>
            </Card.Body>
            <div className="justify-content-end button-align">
              {hiddenButton && (
                <>
                  <Button variant="secondary" className="button-deny" onClick={handleHiddenButton}>Tolak</Button>
                  <VerticalModals
                    show={modalShow}
                    onHide={() => { return setModalShow(false); }}
                  />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default CardHistory;
