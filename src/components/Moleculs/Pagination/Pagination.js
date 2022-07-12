/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
// import ReactPaginate from 'react-paginate';
import Paginator from 'react-js-paginator';
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Paginator
        pageSize={10}
        totalElements={64}
        className="paginate"
        // onPageChangeCallback={(e) => { this.pageChange(e); }}
      />
    </div>
  );
}

export default PaginatedItems;
