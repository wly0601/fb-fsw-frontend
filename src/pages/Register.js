import React, { useEffect } from 'react';
import TemplateRegister from '../components/Templates/Register/TemplateRegister';

function Register() {
  useEffect(() => {
    document.title = 'Daftar';
    // document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div>
      <TemplateRegister />
    </div>
  );
}

export default Register;
