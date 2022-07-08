/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
// import { Form } from 'react-bootstrap';
import TitleList from '../../Atoms/Title/Title';
// import InputList from '../../Atoms/Input/Input';
import './FormInput.Module.css';
import { login } from '../../../redux/actions/auth';

// eslint-disable-next-line consistent-return
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function LoginInput(props) {
  const formLogin = useRef();
  const checkBtn = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => { return state.auth; });
  const { message } = useSelector((state) => { return state.message; });
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    formLogin.current.validateAll();
    // eslint-disable-next-line no-underscore-dangle
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then((res) => {
          console.log(res);
          props.history.push('/');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className="mb-3 mx-5 form-input">
      <TitleList title="Masuk" />
      <Form onSubmit={handleLogin} ref={formLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            className="form-control"
            name="email"
            placeholder="team2@gmail.com"
            value={email}
            onChange={onChangeEmail}
            validations={[required]}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block btn-register mt-4" type="submit" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm" />
            )}
            <span>Login</span>
          </button>
        </div>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
      </Form>
    </div>
  );
}

export default LoginInput;
