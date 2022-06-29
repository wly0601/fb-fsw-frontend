/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

function InputCity(props) {
  const { city } = props;

  const cityStyles = {
    control: (styles) => { return { ...styles }; },
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        color: 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',
        borderRadius: '12px',
      };
    },
  };

  const options = [
    { value: 'Jakarta', label: 'Jakarta' },
    { value: 'Bandung', label: 'Bandung' },
    { value: 'Semarang', label: 'Semarang' },
    { value: 'Malang', label: 'Malang' },
    { value: 'Medan', label: 'Medan' },
    { value: 'Bali', label: 'Bali' },
  ];

  return (
    <div className="mb-3">
      <Form style={{ borderRadius: '16px' }}>
        <Select options={options} styles={cityStyles} />
      </Form>
    </div>
  );
}

export default InputCity;
