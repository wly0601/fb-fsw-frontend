/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getListUser } from '../../../redux/actions/getUser';
import { getCloudinaryPicture } from '../../../redux/actions/cloudinary';
import { updateProfile } from '../../../redux/actions/profile';
import NavbarProfile from '../../Organisms/Navbar/NavbarProfile';
import ProfileInput from '../../Moleculs/Form/ProfileInput';
// import ProfileImage from '../../Atoms/Image/ProfileImage';
import './TemplateProfile.Module.css';

function TemplateProfile(props) {
  // Modal Pop Up (Error)
  const [show, setShow] = useState(false);
  // Data Input Profile
  const [inputName, setInputName] = useState('');
  const [photo, setPhoto] = useState('');
  const [cityId, setCityId] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Upload Image
  const [image, setImage] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleClose = () => { return setShow(false); };
  const handleShow = () => { return setShow(true); };

  const dispatch = useDispatch();
  const {
    userLoading,
    userResult,
    userError,
  } = useSelector((state) => { return state.getUserReducer; });

  const {
    cloudinaryLoading,
    cloudinaryResult,
    cloudinaryError,
  } = useSelector((state) => { return state.getCloudinaryReducer; });

  const {
    profileLoading,
    profileResult,
    profileError,
  } = useSelector((state) => { return state.getProfileReducer; });

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    dispatch(getListUser());
    //   try {

    //     const user = await axios.get('https://second-hand-be.herokuapp.com/api/who-am-i', {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     const getId = user.data.id;
    //     console.log(user.status)
    //     if (user.status === 200) {
    //       const response = await axios.put(
    //         `https://second-hand-be.herokuapp.com/api/user/picture/${getId.toString()}/cloudinary`,
    //         cloudinaryUpload,
    //         {
    //           headers: {
    //             'Content-Type': 'multipart/form-data',
    //             Authorization: `Bearer ${token}`,
    //           },
    //         },
    //       );
    //       console.log(response.status);
    //       if (response.status === 201) {
    //         const body = {
    //           name: inputName,
    //           photo: response.data.url,
    //           phoneNumber,
    //           address,
    //           cityId: parseInt(cityId),
    //         };
    //         const updateRequest = await axios.put(
    //           `https://second-hand-be.herokuapp.com/api/users/${getId.toString()}/detail`,
    //           body,
    //           {
    //             headers: {
    //               'Content-Type': 'application/json',
    //               Authorization: `Bearer ${token}`,
    //             },
    //           },
    //         );
    //         console.log(updateRequest);
    //       }
    //     }
    //   } catch (err) {
    //     console.log(err);
    //     console.log(err?.responses?.data);
    //   }
  }

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {

  });

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
                {image && (
                  <img src={image} alt="" />
                )}
                {uploadedFileURL
                  ? (
                    <img src={uploadedFileURL} alt="preview" className="img-preview-wrapper" />
                  ) : null}
                <div className="avatar">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="avatar-image"
                  />
                </div>
                {/* <Button className="mt-3 mb-3 mx-5 btn-profile" variant="custom" type="submit" style={{ width: '85%' }}>
                  Gambar
                </Button> */}
                <ProfileInput name={setInputName} city={setCityId} phoneNumber={setPhoneNumber} address={setAddress} />
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
