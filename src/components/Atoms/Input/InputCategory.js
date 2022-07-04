/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import './Input.Module.css';

function InputCategory() {
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: '',
  });

  const token = localStorage.getItem('token');

  const getUsers = async () => {
    try {
      const responseUsers = await axios.get(
        'https://second-hand-be.herokuapp.com/api/who-am-i',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const dataUsers = await responseUsers;
      setData(dataUsers);
    } catch (err) {
      console.log(err);
    }
  };

  axios.get('https://second-hand-be.herokuapp.com/api/categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      const state = res.data.data.data.map((listCategory) => {
        return {
          value: listCategory.id,
          label: listCategory.name,
        };
      });
      setCategory(state);
    })
    .catch((err) => {
      const response = err.response.data;
      setErrorResponse({
        isError: true,
        message: response.message,
      });
    });

  useEffect(() => {
    getUsers();
  }, []);

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

  return (
    <div className="mb-3">
      <Form styles={{ borderRadius: '16px' }}>
        <Select options={category} styles={categoryStyles} />
      </Form>
    </div>
  );
}

export default InputCategory;
