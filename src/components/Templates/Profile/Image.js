import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
} from 'react-bootstrap';
import NavbarProfile from '../../Organisms/Navbar/NavbarProfile';
import ProfileInput from '../../Moleculs/Form/ProfileInput';
// import ProfileImage from '../../Atoms/Image/ProfileImage';
import './TemplateProfile.Module.css';

function TemplateProfile() {
  // Modal Pop Up (Error)
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  const handleClose = () => { return setShow(false); };
  const handleShow = () => { return setShow(true); };

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData();
    form.append('picture', image);

    try {
      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsI…EyMH0.lEIWWzbETl04FP0ndkzaWgyjDT0VC6xR7NE9lvx0BEA';

      const user = await axios.get('https://second-hand-be.herokuapp.com/api/who-am-i', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const getId = user.data.id;
      console.log(user, getId);

      const response = await axios.put(
        `https://second-hand-be.herokuapp.com/api/user/picture/${getId.toString()}/cloudinary`,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setUploadedFileURL(response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }
  // console.log(uploadedFileURL);

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    let fileReader = false;
    let isCancel = false;
    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setUploadedFileURL(result);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [image]);
  // const setImage = (file) => {
  //   console.log(file);
  // };

  // const actions = [
  //   <Button variant="info" key={0}>Apply</Button>,
  //   <Button variant="dark" key={1}>Cancel</Button>,
  // ];

  return (
    <>
      <NavbarProfile />
      <div>
        <Container className="profile">
          <Row>
            <Col>
              <div style={{ paddingTop: '30px' }}>
                <Link to="/register" style={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                {/* {image && (
                  <img src={image} alt="" />
                )} */}
                {uploadedFileURL
                  ? (
                    <p>
                      <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" />
                    </p>
                  ) : null}
                <div className="avatar">
                  <input
                    type="file"
                    onChange={handleChangeImage}
                    className="avatar-image"
                  />
                </div>
                <ProfileInput />
                <Button className="mt-3 mb-3 mx-5 btn-profile" variant="custom" type="submit" style={{ width: '85%' }}>
                  Simpan
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>You must filled all the empty columns!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>
              OK
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TemplateProfile;
