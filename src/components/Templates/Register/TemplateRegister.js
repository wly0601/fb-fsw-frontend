import React from 'react';
import { Link } from 'react-router-dom';
import ImageHome from '../../Atoms/Image/ImageHome';
import RegisterInput from '../../Moleculs/Form/RegisterInput';
// import ButtonList from '../../Atoms/Button/ButtonList';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './TemplateRegister.Module.css';

const TemplateRegister = () => {
  return (
    <>
      <div className='form-list'>
        <Container>
          <Row>
            <Col>
              <ImageHome />
            </Col>
            <Col>
              <RegisterInput />
              <Link to='/'>
                <Button className='mb-3 mx-5 btn-register' variant='custom' type='submit'>
                  Daftar
                </Button>
              </Link>
              <Form className='text-center'>
                <Form.Group className='my-3 mx-5'>
                  <Form.Text style={{ marginLeft: '50px' }}>Sudah punya akun? </Form.Text><Link to='/login' style={{ textDecoration: 'none' }}><Form.Text style={{ color: '#7126B5', fontWeight: 'bold' }}>Masuk di sini</Form.Text></Link>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TemplateRegister;