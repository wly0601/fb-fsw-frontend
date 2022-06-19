import { React, useEffect }  from 'react';
import '@fontsource/poppins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Button
} from 'react-bootstrap';
import Form from '../components/Profile/Form'
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
        <div className='arrow'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="App">
          <Button variant="primary" className='form-camera' type="submit">
            <FontAwesomeIcon icon={faCamera} style={{ color: '#7126B5' }} />
          </Button>
        </div>
        <Form />
      </Container>
    </>
  )
}

export default ProfileUser;