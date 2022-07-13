/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// import ReactPaginate from 'react-paginate';
import Paginator from 'react-js-paginator';
import { Pagination } from 'react-bootstrap';
import { getListProducts } from '../../../redux/actions/product';
import './Pagination.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaginatedItems({ currentPage }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(currentPage);

  const {
    productLoading,
    productResult,
    productError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductReducer);

  useEffect(() => {
    dispatch(getListProducts(currentPage));
  }, [dispatch]);

  useEffect(() => {
    if (productResult) {
      // setProduct(productResult);
    }
  }, [productResult]);

  return (
    <div className="pagination-position">
      <Paginator
        pageSize={10}
        totalElements={97}
        className="paginate"
        onPageChangeCallback={(e) => { console.log(e); }}
      />
    </div>
  );
}

export default PaginatedItems;
