import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { getListProducts } from '../../../redux/actions/product';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import './Button.Module.css';

function Category() {
  const dispatch = useDispatch();
  const [btnAll, setBtnAll] = useState('button-category');
  const [btnHobby, setBtnHobby] = useState('button-category');
  const [btnOtomotive, setBtnOtomotive] = useState('button-category');
  const [btnClothes, setBtnClothes] = useState('button-category');
  const [btnElectronic, setBtnElectronic] = useState('button-category');
  const [btnPhotography, setBtnPhotography] = useState('button-category');

  const handleChangeAll = (e) => {
    setBtnAll('button-category-click');
    setBtnHobby('button-category');
    setBtnOtomotive('button-category');
    setBtnClothes('button-category');
    setBtnElectronic('button-category');
    setBtnPhotography('button-category');
    dispatch(getListProducts({ category: '' }));
  };

  const handleChangeHobby = () => {
    setBtnAll('button-category');
    setBtnHobby('button-category-click');
    setBtnOtomotive('button-category');
    setBtnClothes('button-category');
    setBtnElectronic('button-category');
    setBtnPhotography('button-category');
    dispatch(getListProducts({ category: '&category=Hobi%20%26%20Koleksi' }));
  };

  const handleChangeOtomotive = () => {
    setBtnAll('button-category');
    setBtnHobby('button-category');
    setBtnOtomotive('button-category-click');
    setBtnClothes('button-category');
    setBtnElectronic('button-category');
    setBtnPhotography('button-category');
    dispatch(getListProducts({ category: '&category=Otomotif' }));
  };

  const handleChangeClothes = () => {
    setBtnAll('button-category');
    setBtnHobby('button-category');
    setBtnOtomotive('button-category');
    setBtnClothes('button-category-click');
    setBtnElectronic('button-category');
    setBtnPhotography('button-category');
    dispatch(getListProducts({ category: '&category=Pakaian%20Pria' }));
  };

  const handleChangeElectronic = () => {
    console.log('lewat sini');
    setBtnAll('button-category');
    setBtnHobby('button-category');
    setBtnOtomotive('button-category');
    setBtnClothes('button-category');
    setBtnElectronic('button-category-click');
    setBtnPhotography('button-category');
    dispatch(getListProducts({ category: '&category=Elektronik' }));
  };

  const handleChangePhotography = () => {
    setBtnAll('button-category');
    setBtnHobby('button-category');
    setBtnOtomotive('button-category');
    setBtnClothes('button-category');
    setBtnElectronic('button-category');
    setBtnPhotography('button-category-click');
    dispatch(getListProducts({ category: '&category=Fotografi' }));
  };

  return (
    <div align="left">
      <Button variant="secondary" className={btnAll} onClick={handleChangeAll}>
    <div className="btn-category-scroll" align="left">
      <Button variant="secondary" className="button-category">
        <Search className="me-2" />
        Semua
      </Button>
      <Button variant="secondary" className={btnHobby} onClick={handleChangeHobby}>
        <Search className="me-2" />
        Hobi
      </Button>
      <Button variant="secondary" className={btnOtomotive} onClick={handleChangeOtomotive}>
        <Search className="me-2" />
        Otomotif
      </Button>
      <Button variant="secondary" className={btnClothes} onClick={handleChangeClothes}>
        <Search className="me-2" />
        Baju
      </Button>
      <Button variant="secondary" className={btnElectronic} onClick={handleChangeElectronic}>
        <Search className="me-2" />
        Elektronik
      </Button>
      <Button variant="secondary" className={btnPhotography} onClick={handleChangePhotography}>
        <Search className="me-2" />
        Fotografi
      </Button>
    </div>
  );
}

export default Category;
