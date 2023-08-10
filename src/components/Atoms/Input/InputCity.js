/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useJwt, isExpired, decodeToken } from 'react-jwt';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

const token = localStorage.getItem('token');

function InputCity({ inputCity }) {
  const [populate, setPopulate] = useState([]);
  const [data, setData] = useState([]);

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: '',
  });

  axios.get('https://fp-fsw-backend.vercel.app/api/cities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      const state = res.data.data.data.map((city) => {
        return {
          value: city.id,
          label: city.name,
        };
      });
      setPopulate(state);
      // console.log(state)
    })
    .catch((err) => {
      const response = err.response.data;
      setErrorResponse({
        isError: true,
        message: response.message,
      });
    });

  useEffect(() => {
  }, [populate]);

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

  const handleGetValue = (e) => {
    inputCity(e.value);
  };
  // console.log(inputValue)
  return (
    <div className="mb-3">
      <Form style={{ borderRadius: '16px' }}>
        <Select options={populate} onChange={handleGetValue} styles={cityStyles} />
      </Form>
    </div>
  );
}

export default InputCity;
