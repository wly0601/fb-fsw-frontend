import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TemplateOfferingInfo from '../components/Templates/Offering/TemplateOffering';

function OfferingInfo() {
  const token = localStorage.getItem('token');
  const [buyerInfo, setBuyerInfo] = useState([]);
  const [buyerCity, setBuyerCity] = useState([]);
  const [order, setOrderInfo] = useState([]);
  const [product, setProduct] = useState([]);
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
          `https://second-hand-be.herokuapp.com/api/buyer/${response.data.id}/transaction`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        ).then(async (res) => {
          console.log(res.data.buyer.city);
          setBuyerInfo(res.data.buyer);
          setBuyerCity(res.data.buyer.city);
        });
        console.log(response.data.data);
      });

    // const response = await axios.get(transactionId);
    // console.log(response.data);
  });

  useEffect(() => {
    getTransaction();
    document.title = 'Produk Pembeli';
  }, []);
  return (
    <div>
      <TemplateOfferingInfo
        buyerInfo={buyerInfo}
      />
    </div>
  );
}

export default OfferingInfo;
