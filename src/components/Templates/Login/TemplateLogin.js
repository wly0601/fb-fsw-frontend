import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import CheckButton from 'react-validation/build/button';
import ImageHome from '../../Atoms/Image/ImageHome';
import LoginInput from '../../Moleculs/Form/LoginInput';
// import ButtonList from '../../Atoms/Button/ButtonList';
// import './TemplateRegister.Module.css';

function TemplateLogin() {
  return (
    <div className="form-list">
      <Container>
        <Row>
          <Col>
            <ImageHome />
          </Col>
          <Col>
            <LoginInput />
            {/* <Link to="/">
              <Button className="mb-3 mx-5 btn-register" variant="custom" type="submit">
                Masuk
              </Button>
            </Link> */}
            <Form className="text-center">
              <Form.Group className="my-3 mx-5">
                <Form.Text style={{ marginLeft: '50px' }}>Belum punya akun? </Form.Text>
                <Link to="/register" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#7126B5', fontWeight: 'bold' }}>Daftar di sini</Form.Text></Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TemplateLogin;
