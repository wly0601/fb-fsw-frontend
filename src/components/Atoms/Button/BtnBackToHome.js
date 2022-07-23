/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Button.Module.css';

function BtnBackToHome(props) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="btn-back-home mx-5" style={{ paddingTop: '30px' }}>
      <Link to="/" style={{ color: 'black' }}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </div>
  );
}

export default BtnBackToHome;
