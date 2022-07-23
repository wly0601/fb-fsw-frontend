import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TemplateOfferingInfo from '../components/Templates/Offering/TemplateOffering';

function OfferingInfo() {
  const token = localStorage.getItem('token');
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhoto, setBuyerPhoto] = useState('');
  const [buyerCity, setBuyerCity] = useState('');
  const [orderBuyer, setOrderBuyer] = useState([]);
  const [buyerNumber, setBuyerNumber] = useState('');
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
          console.log(res.data);
          setBuyerName(res.data.buyer.name);
          setBuyerCity(res.data.buyer.city.name);
          setBuyerPhoto(res.data.buyer.photo);
          const getOrder = res.data.order;
          setOrderBuyer(getOrder);
          setBuyerNumber(res.data.buyer.phoneNumber);
        });
        console.log(response.data);
      });
  });
  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <div>
      <TemplateOfferingInfo
        buyerInfo={buyerName}
        buyerCity={buyerCity}
        buyerImg={buyerPhoto}
        buyerOrder={orderBuyer}
        buyerNumber={buyerNumber}
      />
    </div>
  );
}

export default OfferingInfo;
