import { useEffect } from "react";
import '@fontsource/poppins';
import ImageLoginRegis from "../components/Login/ImageLoginRegis";
import LoginForm from "../components/Login/LoginForm";
import { 
  Container, 
  Row, 
  Col 
} from "react-bootstrap";

const Login = () => {
  useEffect(() => {
    document.title = "Masuk";
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Container fluid className="p-0">
        <div className="row">
          <div className="col-6">
            <ImageLoginRegis />
          </div>
          <div className="col-6">
            <LoginForm />
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

export default Login;