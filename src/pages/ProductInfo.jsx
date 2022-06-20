import { React, useEffect } from 'react';
import '@fontsource/poppins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';
import ProductInfo from '../components/Seller/Form/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Profile/Form.Module.css';
import '../styles/App.css';

function ProfileUser() {
  useEffect(() => {
    document.title = "Product Info";
  }, []);

  return (
    <>
      <Container>
        <ProductInfo />
      </Container>
    </>
  )
}

export default ProfileUser;