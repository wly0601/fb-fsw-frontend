import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';

import './LoginForm.Module.css'

function LoginForm() {
  return (
    <div className='login-form'>
      <Form>
        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <h1 className='title'>Masuk</h1>
          <Form.Label>Email</Form.Label>
          <Form.Control className='text-email' type="email" placeholder="Contoh: johmdee@gmail.com" style={{ borderRadius: "16px" }} />
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='text-password' type="password" placeholder="Masukkan password" style={{ borderRadius: "16px" }} />
        </Form.Group>

        <Form.Group className="mb-3 mx-5">
          <Link to="/">
            <Button className='btn-login' variant="custom" type="submit" style={{ backgroundColor: "#7126B5", color: "white", borderRadius: "16px" }}>
              MASUK
            </Button>
          </Link>
        </Form.Group>
      </Form>

      <Form>
        <Form.Group className="my-3 mx-5 text-register">
          <Form.Text>Belum punya akun? </Form.Text><Link to="/register"><Form.Text>Daftar di sini</Form.Text></Link>
        </Form.Group>
      </Form>
    </div>

  );
}

export default LoginForm;