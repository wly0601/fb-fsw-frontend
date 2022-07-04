/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import InputList from '../../Atoms/Input/Input';
import InputCity from '../../Atoms/Input/InputCity';
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

function ProfileInput({
  name, city, phoneNumber, address,
}) {
  // const [name, setName] = useState('');
  // const [photo, setPhoto] = useState('');
  // const [cityId, setCityId] = useState('');
  // const [address, setAddress] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [updateProfile, setUpdateProfile] = useState(null);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  const token = localStorage.getItem('token');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userToUpdatePayload = new FormData();
      // userToUpdatePayload.append('town', cityId.current.value);
      // userToUpdatePayload.append('address', address.current.value);
      // userToUpdatePayload.append('phone', phoneNumber.current.value);
      // userToUpdatePayload.append('picture', photo);

      const updateRequest = await axios.put(
        `https://second-hand-be.herokuapp.com/api/users/${data.id.toString()}/detail`,
        userToUpdatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(updateRequest.data.data.data);
      const updateResponse = updateRequest.data.data.data;
      if (updateResponse.status) Navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }

  // const handleChangePhoto = (e) => {
  //   setPhoto(e.target.value);
  // };

  // const handleChangeName = (e) => {
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   name(e.target.value);
  // };

  // const handleChangePhone = (e) => {
  //   phoneNumber(e.target.value);
  // };

  // const handleChangeCity = (e) => {
  //   city(e.target.value);
  // };

  // const handleChangeAddress = (e) => {
  //   address(e.target.value);
  // };

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
          <Form.Label>Nama</Form.Label>
          <InputList
            type="name"
            placeholder="Nama"
            value={name}
            onChange={name}
            validations={[required]}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Kota</Form.Label>
          <InputCity inputCity={city} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat</Form.Label>
          <InputList
            type="address"
            placeholder="Contoh: Jl. Medan Merdeka"
            value={address}
            onChange={address}
            validations={[required]}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>No Handphone</Form.Label>
          <InputList
            type="phone"
            placeholder="08121234569"
            value={phoneNumber}
            onChange={phoneNumber}
            validations={[required]}
          />
        </Form.Group>
        {/* <Button className="mt-3 mb-3 mx-5 btn-profile" variant="custom" style={{ width: '85%' }} onClick={handleSubmit}>
          Simpan Profile
        </Button> */}
      </Form>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProfileInput;
