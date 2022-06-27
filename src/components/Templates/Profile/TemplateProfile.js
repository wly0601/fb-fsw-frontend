import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarImageCropper from 'react-avatar-image-cropper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NavbarProfile from '../../Organisms/Navbar/NavbarProfile';
import ProfileInput from '../../Moleculs/Form/ProfileInput';
// import ButtonList from '../../Atoms/Button/ButtonList';
import {
  Container,
  Row,
  Col,
  Button,
  Modal
} from 'react-bootstrap';
import './TemplateProfile.Module.css';

const TemplateProfile = () => {

  // Modal Pop Up (Error)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setImage = (file) => {
    console.log(file)
  }

  const actions = [
    <Button variant="info" key={0}>Apply</Button>,
    <Button variant="dark" key={1}>Cancel</Button>,
  ]

  return (
    <>
      <NavbarProfile />
      <div>
        <Container className='profile'>
          <Row>
            <Col>
              <div style={{ paddingTop: '30px' }}>
                <Link to="/register" style={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <div className="avatar">
                <AvatarImageCropper apply={setImage} actions={actions} className='avatar-image' />
              </div>
              <ProfileInput />
              <Button className='mt-3 mb-3 mx-5 btn-profile' variant='custom' type='submit' onClick={handleShow} style={{ width: '85%' }}>
                Simpan
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>You must filled all the empty columns!!!</Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            <Link to='/profile' style={{ color: 'white', textDecoration: 'none' }}>
              OK
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TemplateProfile;