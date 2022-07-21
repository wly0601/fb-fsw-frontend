import React from 'react';
import ProductInput from '../../Moleculs/Form/ProductInput';
// import './Input.Module.css';

function FormProduct({
  name, price, categoryId, description,
}) {
  return (
    <div className="form-list">
      <ProductInput
        name={name}
        price={price}
        categoryId={categoryId}
        description={description}
      />
    </div>
  );
}

export default FormProduct;
