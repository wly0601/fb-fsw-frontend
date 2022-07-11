import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getListNotifications } from '../redux/actions/getNotif';
import TemplateSellerProduct from '../components/Templates/Seller/TemplateSellerProduct';

function SellerProduct() {
  const params = useParams();
  const dispatch = useDispatch();
  const [productImage, setProductImage] = useState([]);
  const [productById, setProductById] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [seller, setSeller] = useState([]);
  const [city, setCity] = useState([]);
  const [notif, setNotif] = useState([]);
  const {
    notifLoading,
    notifResult,
    notifError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);
  useEffect(() => {
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

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
      <TemplateSellerProduct
        productById={productById}
        categoryName={categoryName}
        productImage={productImage}
        seller={seller}
        city={city}
        notif={notif}
      />
    </div>
  );
}

export default SellerProduct;
