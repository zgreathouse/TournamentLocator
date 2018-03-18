//modules
import React from 'react';

const GoogleOAuthButton = ({ modalType }) => {

  return (
    <a href="/auth/google">
    <i className="fa fa-google"></i> {modalType} with google</a>
  )
}

export default GoogleOAuthButton;
