/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import { register } from '../../../actions/auth';
// import { Form } from 'react-bootstrap';
import TitleList from '../../Atoms/Title/Title';
import InputList from '../../Atoms/Input/Input';
import './FormInput.Module.css';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };
const vpassword = (value) => {
  if (value.length < 8) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be at least 8 characters.
      </div>
    );
  }
};
function RegisterInput() {
  const form = useRef();
  const checkBtn = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  // eslint-disable-next-line arrow-parens
  // eslint-disable-next-line arrow-body-style
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    form.current.validateAll();
    console.log(checkBtn.current);
    // eslint-disable-next-line no-underscore-dangle
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name, email, password))
        .then(() => {
          setSuccessful(true);
          console.log(name, email, password);
          console.log(checkBtn.current.context);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  return (
    <div className="mb-3 mx-5 form-input">
      <TitleList title="Daftar" />
      <Form onSubmit={handleRegister} ref={form}>
        {!successful && (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onChangeName}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">Daftar</button>
            </div>
          </div>
        )}
        {message && (
          <div className="form-group">
            <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        {/* <Form.Group>
          <Form.Label>Nama</Form.Label>
          <InputList type="name" placeholder="Nama Lengkap" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <InputList type="email" placeholder="team2@gmail.com" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <InputList type="password" placeholder="Masukkan Password" />
        </Form.Group> */}
      </Form>
    </div>
  );
}

export default RegisterInput;
