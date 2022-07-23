/* eslint-disable arrow-body-style */
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getListNotifications } from '../redux/actions/getNotif';
import { getListUser } from '../redux/actions/listUser';
import TemplateBuyerProduct from '../components/Templates/Buyer/TemplateBuyerProduct';

function BuyerProduct() {
  const params = useParams();
  const dispatch = useDispatch();
  const [productImage, setProductImage] = useState([]);
  const [productById, setProductById] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [seller, setSeller] = useState([]);
  const [active, setActive] = useState(false);
  const [city, setCity] = useState([]);
  const [notif, setNotif] = useState([]);
  const [user, setUser] = useState('');
  const [transaction, setTransaction] = useState([]);

  const {
    productResult,
  } = useSelector((state) => state.getTransactionProductReducer);

  const {
    wishlistResult,
  } = useSelector((state) => state.createWishlistReducer);

  const {
    userResult,
  } = useSelector((state) => state.getListUserReducer);

  const {
    notifResult,
  } = useSelector((state) => state.getListNotifications);

  useEffect(() => {
    dispatch(getListUser());
    dispatch(getListNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (productResult) {
      setTransaction(productResult);
    }
  }, [productResult]);

  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  useEffect(() => {
    console.log(userResult);
    if (userResult) {
      setUser(userResult);
    }
  }, [userResult]);

  const fetchData = useCallback(async () => {
    let buyer = '';
    if (userResult.id) {
      buyer = `?buyerId=${userResult.id}`;
    }

    console.log(buyer);
    const productId = `https://second-hand-be.herokuapp.com/api/product/${params.id}${buyer}`;

    const response = await axios.get(productId);
    console.log(response);
    setProductById(response.data);
    setCategoryName(response.data.category);
    setProductImage(response.data.images);
    setSeller(response.data.seller);
    setCity(response.data.seller.city);
    console.log(response.data);
    setActive(response.data.markedByUser);
  });

  useEffect(() => {
    fetchData();
  }, [user]);

  console.log(productImage);
  return (
    <div>
      <TemplateBuyerProduct
        productById={productById}
        categoryName={categoryName}
        productImage={productImage}
        seller={seller}
        city={city}
        notif={notif}
        active={active}
        transaction={transaction}
      />
    </div>
  );
}

export default BuyerProduct;
