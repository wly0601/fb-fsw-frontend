import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './RegisterForm.Module.css'

function RegisterForm() {
  return (
    <div className='login-form'>
      <Form>
        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <h1 className='title'>Daftar</h1>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="email" placeholder="Nama Lengkap" style={{ borderRadius: "16px" }} />
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="email" placeholder="Contoh: johmdee@gmail.com" style={{ borderRadius: "16px" }} />
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Masukkan password" style={{ borderRadius: "16px" }} />
        </Form.Group>
        <Form.Group className="mb-3 mx-5">
          <Link to="/">
            <Button className='btn-register' variant="custom" type="submit" style={{ backgroundColor: "#7126B5", color: "white", borderRadius: "16px" }}>
              DAFTAR
            </Button>
          </Link>
        </Form.Group>
      </Form>

      <Form>
        <Form.Group className="my-3 mx-5 text-register">
          <Form.Text>Sudah punya akun? </Form.Text><Link to="/login"><Form.Text>Masuk di sini</Form.Text></Link>
        </Form.Group>
      </Form>
    </div>

  );
}

export default RegisterForm;