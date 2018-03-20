//modules
import React from 'react';

const GoogleOAuthButton = ({ modalType }) => {

  return (
    <div className="oauth-button google">
      <a href="/auth/google">
      <i className="fa fa-google"></i> {modalType} with google</a>
    </div>
  )
}

export default GoogleOAuthButton;
