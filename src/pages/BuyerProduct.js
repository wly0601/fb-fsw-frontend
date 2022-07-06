import React, { useEffect } from 'react';
import TemplateBuyerProduct from '../components/Templates/Buyer/TemplateBuyerProduct';

function BuyerProduct() {
  useEffect(() => {
    document.title = 'Produk Pembeli';
  }, []);

  return (
    <div>
      <TemplateBuyerProduct />
    </div>
  );
}

export default BuyerProduct;
