import React from 'react';

const GoogleOAuthButton = ({ modalType }) => {

  return (
    <a
      href="auth/google"
      className="z-depth-5 btn social google"
      style={{backgroundColor: "#dd4b39"}}
    >
    <i className="fa fa-google"></i> {modalType} with google</a>
  )
}

export default GoogleOAuthButton;
