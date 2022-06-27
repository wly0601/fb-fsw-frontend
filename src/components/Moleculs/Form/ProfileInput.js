import React from 'react';
import { Form } from 'react-bootstrap';
import InputList from '../../Atoms/Input/Input'
import InputCity from '../../Atoms/Input/InputCity';
import './FormInput.Module.css';

const ProfileInput = () => {
  return (
    <>
      <div className='mt-5 mb-3 mx-5 profile-input'>
        <Form>
          <Form.Group>
            <Form.Label>Nama</Form.Label>
            <InputList type='name' placeholder='Nama' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kota</Form.Label>
            <InputCity />
          </Form.Group>
          <Form.Group>
            <Form.Label>Alamat</Form.Label>
            <InputList type='address' placeholder='Contoh: Jl. Medan Merdeka' />
          </Form.Group>
          <Form.Group>
            <Form.Label>No Handphone</Form.Label>
            <InputList type='phone' placeholder='08121234569' />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default ProfileInput;