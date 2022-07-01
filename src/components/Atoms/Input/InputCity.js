/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React, { useState, Component } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

function InputCity(props) {
  const [populate, setPopulate] = useState([]);

  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksIm5hbWUiOiJLaW0gVGFlaHl1bmciLCJlbWFpbCI6InRodkBnbWFpbC5jb20iLCJpYXQiOjE2NTY1ODgyMDN9.V5uUzP0w1nIRKlkh8HR4KwQUHN7CqOzk35D3u-l0MsM';
  axios.get('https://second-hand-be.herokuapp.com/api/cities', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
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
    })
    .catch((error) => {
      console.error(error);
    });

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

  // const options = [
  //   { value: 'Jakarta', label: 'Jakarta' },
  //   { value: 'Bandung', label: 'Bandung' },
  //   { value: 'Semarang', label: 'Semarang' },
  //   { value: 'Malang', label: 'Malang' },
  //   { value: 'Medan', label: 'Medan' },
  //   { value: 'Bali', label: 'Bali' },
  // ];

  return (
    <div className="mb-3">
      <Form style={{ borderRadius: '16px' }}>
        <Select options={populate} styles={cityStyles} />
      </Form>
    </div>
  );
}

export default InputCity;
