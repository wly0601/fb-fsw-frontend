/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Row, Col, Button, Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createListProduct } from '../../../redux/actions/createProduct';
import NavbarProduct from '../../Organisms/Navbar/NavbarProduct';
import ProductInput from '../../Moleculs/Form/ProductInput';
import './TemplateProduct.Module.css';

function TemplateProduct() {
  // Data Input Product
  const [inputName, setInputName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  // Upload Image
  const [image, setImage] = useState([]);
  const [uploadedFileURL, setUploadedFileURL] = useState([]);
  const dispatch = useDispatch();

  let fileObj = [];

  const {
    productLoading,
    productResult,
    productError,
  } = useSelector((state) => { return state.getProductReducer; });

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: inputName,
      price: parseInt(price),
      description,
      categoryId: parseInt(categoryId),
    };
    await dispatch(createListProduct(image, body));
  }

  const handleChangeImage = (e) => {
    fileObj.push(e.target.files);
    setMessage(false);
    let sum = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < fileObj.length; i++) {
      sum += fileObj[i].length;
    }

    if (sum > 4) {
      setMessage(true);
      fileObj = [];
      setImage([]);
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < fileObj[0].length; i++) {
        image.push(fileObj[0][i]);
      }
      setImage(image);
    }
    console.log(fileObj);
    console.log(image);
    // setImage(e.target.value);
  };

  useEffect(() => {
    if (productLoading) {
      setLoading(true);
    } else if (productResult) {
      setLoading(false);
      window.location.reload();
      console.log(productResult);
    } else if (productError) {
      console.log(productError);
    }
    // let fileReader = false;
    // let isCancel = false;
    // if (image) {
    //   fileReader = new FileReader();
    //   fileReader.onload = (e) => {
    //     const { result } = e.target;
    //     if (result && !isCancel) {
    //       setUploadedFileURL(result);
    //     }
    //   };
    //   fileReader.readAsDataURL(image);
    // }
    // return () => {
    //   isCancel = true;
    //   if (fileReader && fileReader.readyState === 1) {
    //     fileReader.abort();
    //   }
    // };
  });

  if (productResult) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavbarProduct />
      {message && (
        <div className="alert alert-danger" role="alert">
          You can upload maximum 4 images!
        </div>
      )}
      <div>
        <Container className="form-products">
          <Row>
            <Col>
              <div style={{ paddingTop: '30px' }}>
                <Link to="/" style={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <ProductInput
                  name={setInputName}
                  price={setPrice}
                  categoryId={setCategoryId}
                  description={setDescription}
                />
                <Form.Group className="mb-3" controlId="productPhoto">
                  <Row>
                    <Form.Label>Foto Produk</Form.Label>
                  </Row>
                  <Row>
                    {image && image.map(({ images, index }) => {
                      return (
                        <img src={images} key={index} alt="" />
                      );
                    })}
                    {/* {image && image.map(
                      <img src={image} alt="" />,
                    )} */}
                    {/* {uploadedFileURL
                      ? (
                        <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" />
                      ) : null} */}
                    <Form.Control
                      type="file"
                      accept=""
                      onChange={handleChangeImage}
                      className="upload-button"
                      multiple
                    />
                  </Row>
                  <Button variant="primary" className="publish-button" type="submit">
                    Terbitkan
                    {loading && (
                    <span className="spinner-border spinner-border-sm" />
                    )}
                  </Button>
                </Form.Group>
              </form>
            </Col>
          </Row>
          <Row className="mx-5 mb-5">
            <Col xs={6}>
              <Link to="/seller/product/:id">
                <Button variant="primary" className="preview-button" type="submit">
                  Preview
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TemplateProduct;
