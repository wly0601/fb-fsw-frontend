import { useEffect } from "react";
import '@fontsource/poppins';
import ImageLoginRegis from "../components/Login/ImageLoginRegis";
import RegisterForm from "../components/Register/RegisterForm";
import { 
  Container, 
  Row, 
  Col 
} from "react-bootstrap";

const Register = () => {
  useEffect(() => {
    document.title = "Daftar";
  }, []);

  return (
    <>
      <Container fluid className="p-0">
        <Row style={{ marginleft: 0}}>
          <Col style={{ paddingleft: 0}}><ImageLoginRegis /></Col>
          <Col><RegisterForm /></Col>
        </Row>
      </Container>
    </>
  )
};

export default Register;