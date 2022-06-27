import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.Module.css';

const InputList = (props) => {
  const { type, placeholder } = props;

  return (
    <>
      <div className='mb-3'>
        <Form>
          <Form.Control type={type} placeholder={placeholder} className='form-list' />
        </Form>
      </div>
    </>
  )
}

export default InputList;