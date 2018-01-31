//modules
import React from 'react';

//components
import FacebookOAuthButton from './FacebookOAuthButton';
import GoogleOAuthButton from './GoogleOAuthButton';

const AuthModalBody = ({modalType}) => {
  return (
    <div className="container">
      <div
        className="center-align"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "130px 0 70px 0",
          color: "#403f42"
        }}
      >
        {modalType} with Google or Facebook!
      </div>
      <GoogleOAuthButton modalType={modalType}/>
      <FacebookOAuthButton modalType={modalType}/>
    </div>
  )
}

export default AuthModalBody;
