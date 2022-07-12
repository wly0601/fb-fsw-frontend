import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import TemplateOfferingInfo from '../components/Templates/Offering/TemplateOffering';

function OfferingInfo() {
  const token = localStorage.getItem('token');
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhoto, setBuyerPhoto] = useState('');
  const [buyerCity, setBuyerCity] = useState('');
  const [orderBuyer, setOrderBuyer] = useState([]);
  const params = useParams();

  const getTransaction = useCallback(async () => {
    await axios.get(
      'https://second-hand-be.herokuapp.com/api/who-am-i',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then(async (response) => {
        await axios.get(
          `https://second-hand-be.herokuapp.com/api/buyer/${params.buyerId}/transaction`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        ).then(async (res) => {
          console.log(orderBuyer);
          console.log(res.data);
          setBuyerName(res.data.buyer.name);
          setBuyerCity(res.data.buyer.city.name);
          setBuyerPhoto(res.data.buyer.photo);
          console.log(res.data.order);
          const getOrder = res.data.order;
          setOrderBuyer(getOrder);
          console.log(orderBuyer);
        });
        console.log(response.data);
      });

    // const response = await axios.get(transactionId);
    // console.log(response.data);
  });

  console.log(orderBuyer);

  useEffect(() => {
    getTransaction();
    document.title = 'Produk Pembeli';
  }, []);

  return (
    <div>
      <TemplateOfferingInfo
        buyerInfo={buyerName}
        buyerCity={buyerCity}
        buyerImg={buyerPhoto}
        buyerOrder={orderBuyer}
      />
    </div>
  );
}

export default OfferingInfo;
