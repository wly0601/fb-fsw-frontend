/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.Module.css';

function InputCity(props) {
  const { city } = props;

  return (
    <div className="mb-3">
      <Form>
        <Form.Select className="text-city">
          <option>Pilih Kota</option>
          <option value="1">Jakarta</option>
          <option value="2">Bandung</option>
          <option value="3">Semarang</option>
          <option value="4">Malang</option>
          <option value="5">Medan</option>
        </Form.Select>
      </Form>
    </div>
  );
}

export default InputCity;
