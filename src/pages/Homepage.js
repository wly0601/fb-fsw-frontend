import React from 'react';
import { Container } from 'react-bootstrap';
import TemplateHome from '../components/Templates/Homepage/TemplateHome';

function Homepage() {
  return (
    <div>
      <Container fluid className="p-0">
        <TemplateHome />
      </Container>
    </div>
  );
}

export default Homepage;
