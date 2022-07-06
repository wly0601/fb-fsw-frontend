import React, { useEffect } from 'react';
import TemplateLogin from '../components/Templates/Login/TemplateLogin';

function Login() {
  useEffect(() => {
    document.title = 'Masuk';
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div>
      <TemplateLogin />
    </div>
  );
}

export default Login;
