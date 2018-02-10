//modules
import React from 'react';

const GoogleOAuthButton = ({ modalType }) => {

  return (
    <a
      href="/auth/google"
      className="hoverable center-align btn-large social google"
      style={{margin: "10px 0 10px 0", backgroundColor: "#dd4b39", width: "300px"}}
    >
    <i className="fa fa-google"></i> {modalType} with google</a>
  )
}

export default GoogleOAuthButton;
