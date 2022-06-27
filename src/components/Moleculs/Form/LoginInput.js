import React from 'react';
import { Form } from 'react-bootstrap';
import TitleList from '../../Atoms/Title/Title'
import InputList from '../../Atoms/Input/Input'
import './FormInput.Module.css';

const LoginInput = () => {
  return (
    <>
      <div className='mb-3 mx-5 form-input'>
        <TitleList title='Masuk' />
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <InputList type='email' placeholder='team2@gmail.com' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <InputList type='password' placeholder='Masukkan Password' />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default LoginInput;