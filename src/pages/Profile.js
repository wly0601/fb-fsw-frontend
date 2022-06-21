import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarImageCropper from 'react-avatar-image-cropper'
import '@fontsource/poppins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Button,
} from 'react-bootstrap';
import FormProfile from '../components/Profile/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Profile/Form.Module.css';
import '../styles/App.css';

function ProfileUser() {
  const setImage = (file) => {
    console.log(file)
  }

  const actions = [
    <Button variant="info" key={0}>Apply</Button>,
    <Button variant="dark" key={1}>Cancel</Button>,
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Profile Detail";
  }, []);

  return (
    <>
      <Container>
        <div style={{ paddingTop: '30px' }}>
          <Link to="/register" style={{ color: 'black' }}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
        <div className="App">
          <AvatarImageCropper apply={setImage} actions={actions} />
        </div>
        <FormProfile />
      </Container>
    </>
  )
}

export default ProfileUser;