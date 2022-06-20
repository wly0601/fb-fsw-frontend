import Carousel from "../components/Carousel";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { IMAGES } from "../data/data"
const Homepage = () => {
  useEffect(() => {
    document.title = "SecondHand";
  }, []);

  return (
    <>
      <Container fluid style={{ paddingleft: 0, paddingright: 0}}>
        <div className="row">
          <div className="col-12">
            <Carousel images={IMAGES}/>
          </div>
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