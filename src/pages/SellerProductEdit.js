import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TemplateSellerProductEdit from '../components/Templates/Seller/TemplateSellerProductEdit';

function SellerProductEdit() {
  const params = useParams();
  const [productImage, setProductImage] = useState([]);
  const [productById, setProductById] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [seller, setSeller] = useState([]);
  const [city, setCity] = useState([]);

  const fetchData = useCallback(async () => {
    const productId = `https://second-hand-be.herokuapp.com/api/product/${params.id}`;

    const response = await axios.get(productId);
    console.log(response.data);
    setProductById(response.data);
    setCategoryName(response.data.category);
    setProductImage(response.data.images);
    setSeller(response.data.seller);
    setCity(response.data.seller.city);
  });

  useEffect(() => {
    fetchData();
    document.title = 'Produk Pembeli';
  }, []);

  return (
    <div>
      <TemplateSellerProductEdit
        productById={productById}
        categoryName={categoryName}
        productImage={productImage}
        seller={seller}
        city={city}
      />
    </div>
  );
}

export default SellerProductEdit;
