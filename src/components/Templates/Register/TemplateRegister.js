import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Form,
} from 'react-bootstrap';
import ImageHome from '../../Atoms/Image/ImageHome';
import RegisterInput from '../../Moleculs/Form/RegisterInput';
import './TemplateRegister.Module.css';

function TemplateRegister() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    window.addEventListener('resize', () => {
      const mobile = window.innerWidth < 600;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    }, false);
  }, [isMobile]);

  return (
    <div className="form-list">
      <Container fluid className="p-0">
        <div className="row">
          <div className="col-6 image-home">
            <ImageHome />
          </div>
          <div className={`${isMobile ? 'col-10' : 'col-5'}`}>
            <RegisterInput />
            <Form className={`${isMobile ? 'text-center fixed-bottom mb-5' : 'text-center'}`}>
              <Form.Group className="my-3 mx-5">
                <Form.Text>Sudah punya akun? </Form.Text>
                <Link to="/login" style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#7126B5', fontWeight: 'bold' }}>Masuk di sini</Form.Text></Link>
              </Form.Group>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TemplateRegister;
