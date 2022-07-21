/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.Module.css';

function InputDesc(props) {
  const { type, placeholder, onChange } = props;

  const handleChangeName = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    onChange(e.target.value);
  };

  return (
    <div className="mb-3">
      <Form>
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={handleChangeName}
          as="textarea"
          className="form-desc"
        />
      </Form>
    </div>
  );
}

export default InputDesc;
