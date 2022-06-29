import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import './RegisterForm.Module.css';

function RegisterForm() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [name, setName] = useState(null);
  // const [alertName, setAlertName] = useState(false)
  const [email, setEmail] = useState(null);
  // const [alertEmail, setAlertEmail] = useState(false)
  const [password, setPassword] = useState(null);
  // const [alertPassword, setAlertPassword] = useState(false)

  let showAlertName = false;
  let showAlertEmail = false;
  let showAlertPassword = false;

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  if (name !== null && name.length === 0) {
    showAlertName = true;
  }

  const filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
  if (email !== null && email !== '') {
    if (email.search(filter) === -1) {
      showAlertEmail = true;
    }
  }

  if (password !== null && password.length < 8) {
    showAlertPassword = true;
  }

  function submitHandler(event) {
    event.preventDefault();

    const requestBody = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (showAlertName && showAlertEmail && showAlertPassword) {
      // Kasi alert kalo data blum pas
      // alert('Harap isi Data Dengan Benar!')
    } else {
      console.log(requestBody);
    }
  }

  return (
    <div className="login-form">
      <Form onSubmit = {submitHandler}>
        <Form.Group className="mb-3 mx-5" controlId="formBasicName">
          <h1 className="title">Daftar</h1>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="name" onChange={nameChangeHandler} ref={nameRef} placeholder="John Dee" style={{ borderRadius: '16px' }} />
          {showAlertName && (<p className="alert-msg"> Nama Tidak Boleh Kosong!</p>)}
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" onChange={emailChangeHandler} ref={emailRef} placeholder="johndee@gmail.com" style={{ borderRadius: '16px' }} />
          {showAlertEmail && (<p className="alert-msg"> Format Email Salah!</p>)}
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required onChange={passwordChangeHandler} ref={passwordRef} placeholder="Masukkan password" style={{ borderRadius: '16px' }} />
          {showAlertPassword && (<p className="alert-msg"> Password Harus Mempunyai Minimal 8 Karakter!</p>)}
        </Form.Group>
        <Form.Group className="mb-3 mx-5">
          <Button className="btn-register" variant="custom" type="submit" value="Submit" style={{ backgroundColor: '#7126B5', color: 'white', borderRadius: '16px' }}>
            DAFTAR
          </Button>
        </Form.Group>
      </Form>

      <Form>
        <Form.Group className="my-3 mx-5 text-register">
          <Form.Text>Sudah punya akun? </Form.Text>
          <Link to="/login">
            <Form.Text>Masuk di sini</Form.Text>
          </Link>
        </Form.Group>
      </Form>
    </div>

  );
}

export default RegisterForm;
