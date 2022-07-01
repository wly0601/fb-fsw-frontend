/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

function InputCity() {
  const [populate, setPopulate] = useState([]);

  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFobWFkIFl1bmVkYSBBbGZhanIiLCJlbWFpbCI6ImFobWFkYWxmYWpyQGdtYWlsLmNvbSIsImlhdCI6MTY1NjY1NDAyMn0.DR95ABFH0LS7A_Uzuo7HKDXSTZ3at4JtObj3799Pmfk';
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

  return (
    <div className="mb-3">
      <Form style={{ borderRadius: '16px' }}>
        <Select options={populate} styles={cityStyles} />
      </Form>
    </div>
  );
}

export default InputCity;
