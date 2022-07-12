/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';

function BtnAddProduct() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="fixed-bottom mb-3" align="center">
      <a href="/seller/sell">
        <Button className="text-center" variant="secondary" style={{ backgroundColor: '#7126B5', height: '100%' }}>
          <Plus />
          {' '}
          Jual
        </Button>
      </a>
    </div>
  );
}

export default BtnAddProduct;
