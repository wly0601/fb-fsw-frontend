/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Row } from 'react-bootstrap';
import InputList from '../../Atoms/Input/Input';
import InputCategory from '../../Atoms/Input/InputCategory';
import './FormInput.Module.css';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function UpdateProduct({
  id, name, price, categoryId, description,
}) {
  const params = useParams();
  console.log(`${params.id}`);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const token = localStorage.getItem('token');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userToUpdatePayload = new FormData();
      const updateRequest = await axios.put(
        `https://second-hand-be.herokuapp.com/api/product/${params.id}`,
        userToUpdatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(updateRequest.data.data.data);
      const updateResponse = updateRequest.data.data.data;
      // name(updateResponse.name);
      // if (updateResponse.status) Navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUserRequest = await axios.get(
          'https://second-hand-be.herokuapp.com/api/who-am-i',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const currentUserResponse = currentUserRequest.data;
        if (currentUserResponse.status) {
          setUser(currentUserResponse.data);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    fetchData();
  }, []);

  return isLoggedIn ? (
    <div className="mt-5 mb-3 mx-5 profile-input">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nama Produk</Form.Label>
          <InputList
            type="name"
            placeholder="Nama"
            value={name}
            onChange={name}
            validations={[required]}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Harga Produk</Form.Label>
          <InputList
            type="price"
            placeholder="Rp, 00"
            value={price}
            onChange={price}
            validations={[required]}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Kategori</Form.Label>
          <InputCategory inputCategory={categoryId} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Deskripsi</Form.Label>
          <InputList
            type="description"
            placeholder="Contoh: Produk ini merupakan..."
            value={description}
            onChange={description}
            validations={[required]}
          />
        </Form.Group>
      </Form>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default UpdateProduct;
