import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';
import FormProfile from '../components/Profile/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Profile/Form.Module.css';
import '../styles/App.css';

function ProfileUser() {
  useEffect(() => {
    document.title = "Profile Detail";
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='arrow'>
              <Link to="/register" style={{color: 'black'}}>
              <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </div>
          </Col>
        </Row>
        <Col xs={12}>
          <div className="App">
            <Form>
              <FontAwesomeIcon icon={faCamera} className='camera-icon' />
              <Form.Control type="file" className='upload-profile' />
            </Form>
          </div>
        </Col>
        <Col>
        <FormProfile />
        </Col>
      </Container>
    </>
  )
}

export default ProfileUser;