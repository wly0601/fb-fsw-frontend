import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { getListNotifications } from '../redux/actions/getNotif';
import { getHistoryBuyer } from '../redux/actions/historyBuyer';
import TemplateHistoryBuyer from '../components/Templates/History/TemplateHistoryBuyer';

function HistoryBuyer() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhoto, setBuyerPhoto] = useState('');
  const [buyerCity, setBuyerCity] = useState('');
  const [notif, setNotif] = useState([]);
  const [history, setHistory] = useState([]);
  const {
    notifResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getListNotifications);

  const {
    historyResult,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getHistoryBuyerReducer);

  const fetchData = useCallback(async () => {
    await axios.get(
      'https://second-hand-be.herokuapp.com/api/who-am-i',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then(async (res) => {
        setBuyerName(res.data.name);
        setBuyerCity(res.data.address);
        setBuyerPhoto(res.data.photo);
      });
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getListNotifications());
    dispatch(getHistoryBuyer());
  }, [dispatch]);
  useEffect(() => {
    if (notifResult) {
      setNotif(notifResult);
    }
  }, [notifResult]);

  useEffect(() => {
    if (historyResult) {
      setHistory(historyResult);
    }
  }, [historyResult]);
  console.log(historyResult);
  console.log(history);
  return (
    <div>
      <Container fluid className="p-0">
        <TemplateHistoryBuyer
          buyerName={buyerName}
          buyerCity={buyerCity}
          buyerPhoto={buyerPhoto}
          notif={notif}
          history={history}
        />
      </Container>
    </div>
  );
}

export default HistoryBuyer;
