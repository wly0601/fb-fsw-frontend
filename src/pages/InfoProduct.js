import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import TemplateProduct from '../components/Templates/Product/TemplateProduct';
import { getListUser } from '../redux/actions/listUser';
import { getUserId } from '../redux/actions/getUserId';
import getUser from '../utils/decodeToken';

function InfoProduct() {
  return (
    <div>
      <TemplateProduct />
    </div>
  );
}

export default InfoProduct;
