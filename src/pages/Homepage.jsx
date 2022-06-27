import React from 'react';
import TemplateHome from '../components/Templates/Homepage/TemplateHome';
import { Container } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div>
      <Container fluid className='p-0'>
        <TemplateHome />
      </Container>
    </div>
  )
}

export default Homepage;