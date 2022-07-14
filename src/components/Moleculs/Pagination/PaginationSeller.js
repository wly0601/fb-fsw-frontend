/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paginator from 'react-js-paginator';
import { getSellerListProducts } from '../../../redux/actions/sellerProduct';
import './Pagination.Module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaginatedSeller({ currentPage, meta }) {
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
    dispatch(getSellerListProducts({ page: e }));
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
        pageBoxStyle={{
          marginLeft: '25px',
        }}
        activePageBoxStyle={{
          fontWeight: 'bolder',
          color: 'white',
          backgroundColor: '#7126B5',
          // paddingLeft: '30px',
        }}
      />
    </div>
  );
}

export default PaginatedSeller;
