import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import InputList from '../../Atoms/Input/Input';
import InputCity from '../../Atoms/Input/InputCity';
import './FormInput.Module.css';

function ProfileInput() {
  const [userId, setUserId] = useState(1);
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserCity = (e) => {
    setUserCity(e.target.value);
  };

  const handleUserAddress = (e) => {
    setUserAddress(e.target.value);
  };

  const handleUserPhone = (e) => {
    setUserPhone(e.target.value);
  };

  useEffect(() => {
    axios.put(`https://second-hand-be.herokuapp.com/api/users/${userId}/detail`)
      .then((res) => {
        console.log(res);
        setUserName(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <div className="mt-5 mb-3 mx-5 profile-input">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <InputList type="name" placeholder="Nama" value={userName} onChange={handleUserName} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Kota</Form.Label>
          <InputCity value={userCity} onChange={handleUserCity} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Alamat</Form.Label>
          <InputList type="address" placeholder="Contoh: Jl. Medan Merdeka" value={userAddress} onChange={handleUserAddress} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>No Handphone</Form.Label>
          <InputList type="phone" placeholder="08121234569" value={userPhone} onChange={handleUserPhone} required />
        </Form.Group>
      </Form>
    </div>
  );
}

export default ProfileInput;
