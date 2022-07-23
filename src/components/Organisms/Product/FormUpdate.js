import React from 'react';
import UpdateProduct from '../../Moleculs/Form/updateProduct';
// import './Input.Module.css';

function FormUpdate({
  name, price, categoryId, description,
}) {
  return (
    <div className="form-list">
      <UpdateProduct
        name={name}
        price={price}
        categoryId={categoryId}
        description={description}
      />
    </div>
  );
}

export default FormUpdate;
