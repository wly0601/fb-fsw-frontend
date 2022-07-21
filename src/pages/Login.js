import React, { useEffect } from 'react';
import TemplateLogin from '../components/Templates/Login/TemplateLogin';

function Login() {
  useEffect(() => {
    document.title = 'Masuk';
  }, []);

  return (
    <div>
      <TemplateLogin />
    </div>
  );
}

export default Login;
