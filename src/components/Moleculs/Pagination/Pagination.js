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

function PaginatedItems({ currentPage, meta }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  const {
    productLoading,
    productResult,
    productError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductReducer);

  const {
    productMetaLoading,
    productMetaResult,
    productMetaError,
  // eslint-disable-next-line arrow-body-style
  } = useSelector((state) => state.getProductMetaReducer);

  const handleChangePage = (e) => {
    dispatch(getListProducts({ page: e }));
  };

  useEffect(() => {
    if (productResult) {
      setProduct(productResult);
      console.log(product);
    }
  }, [productResult]);

  let totalElements = 1;
  if (Object.keys(meta).length !== 0) {
    totalElements = meta.pagination.count;
  }
  console.log(totalElements);
  return (
    <div className="pagination-position">
      <Paginator
        pageSize={18}
        totalElements={totalElements}
        className="paginate"
        onPageChangeCallback={(e) => { console.log(e); handleChangePage(e); }}
      />
    </div>
  );
}

export default PaginatedItems;
