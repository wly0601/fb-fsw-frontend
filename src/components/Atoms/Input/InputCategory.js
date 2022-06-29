/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

function InputCategory(props) {
  const { city } = props;

  const categoryStyles = {
    control: (styles) => { return { ...styles }; },
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        color: 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',
        borderRadius: '12px',
        zIndex: '2',
      };
    },
  };

  const options = [
    { value: 'Baju', label: 'Baju' },
    { value: 'Celana', label: 'Celana' },
    { value: 'Topi', label: 'Topi' },
    { value: 'Kesehatan', label: 'Kesehatan' },
    { value: 'Teknologi', label: 'Teknologi' },
    { value: 'Peralatan', label: 'Peralatan' },
  ];

  return (
    <div className="mb-3">
      <Form styles={{ borderRadius: '16px' }}>
        <Select options={options} styles={categoryStyles} />
      </Form>
    </div>
  );
}

export default InputCategory;
