import React from 'react';

//components
import FacebookOAuthButton from './FacebookOAuthButton';
import GoogleOAuthButton from './GoogleOAuthButton';

const AuthModalBody = ({modalType}) => {
  return (
    <div className="container">
      <div
        className="center-align"
        style={{ fontSize: "20px", margin: "80px 0 60px 0"}}
      >
        {modalType} with Google or Facebook!
      </div>
      <GoogleOAuthButton modalType={modalType}/>
      <FacebookOAuthButton modalType={modalType}/>
    </div>
  )
}

export default AuthModalBody;
