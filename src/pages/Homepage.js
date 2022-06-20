import Carousel from "../components/Carousel";
import Category from "../components/Category";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { IMAGES } from "../data/data"
const Homepage = () => {
  useEffect(() => {
    document.title = "SecondHand";
  }, []);

  return (
    <>
      <Container fluid style={{ paddingleft: 0, paddingright: 0 }}>
        <div className="row mt-3">
          <div className="col-12">
            <Carousel images={IMAGES} />
          </div>
        </div>
        <div className="row mt-5 mx-5">
          <div className="col-12">
            <h5 style={{ textAlign: "left" }}>Telusuri Kategori</h5>
          </div>
        </div>
        <div className="row mt-3 mx-5">
          <Category />
        </div>


        {/* <Row style={{ marginleft: 0}}>
          <Col style={{ paddingleft: 0}}><ImageLoginRegis /></Col>
          <Col><LoginForm /></Col>
        </Row> */}
      </Container>
    </>
  )
};

export default Homepage;