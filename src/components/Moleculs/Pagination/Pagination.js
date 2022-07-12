/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Pagination } from 'react-bootstrap';
// import JsonData from './MOCK_DATA.json';
import './Pagination.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaginatedItems() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const dataProducts = 'https://second-hand-be.herokuapp.com/api/products';

    const response = await axios.get(dataProducts);
    console.log(response.data);
    setData(response.data);
  });

  return (
    <div>
      <Pagination className="paginate">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default PaginatedItems;
