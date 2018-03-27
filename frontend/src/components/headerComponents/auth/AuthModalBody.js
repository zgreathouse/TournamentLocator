//modules
import React from 'react';

//components
import FacebookOAuthButton from './FacebookOAuthButton';
import GoogleOAuthButton from './GoogleOAuthButton';

const AuthModalBody = ({modalType}) => {
  return (
    <div className="modal-content">
      <h2 className="modal-greeting">
        {modalType} with <br/> Google or Facebook!
      </h2>
      <div className="oauth-button-container">
        <GoogleOAuthButton modalType={modalType}/>
        <FacebookOAuthButton modalType={modalType}/>
      </div>
    </div>
  )
}

export default AuthModalBody;
