/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import TemplateProfile from '../components/Templates/Profile/TemplateProfile';
import decode from '../utils/decodeToken';

function InfoProfile() {
  if (decode().toLogin) {
    <Navigate to="/login" replace />;
  }

  return (
    <div>
      <TemplateProfile />
    </div>
  );
}

export default InfoProfile;
