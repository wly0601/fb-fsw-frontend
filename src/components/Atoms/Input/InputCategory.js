import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.Module.css';

const InputCity = (props) => {
  const { city } = props;

  return (
    <>
      <div className='mb-3'>
        <Form>
          <Form.Select className='text-category'>
            <option>Pilih Kategori</option>
            <option value='1'>Kendaraan</option>
            <option value='2'>Elektronik</option>
            <option value='3'>Baju</option>
            <option value='4'>Celana</option>
            <option value='5'>Topi</option>
          </Form.Select>
        </Form>
      </div>
    </>
  )
}

export default InputCity;