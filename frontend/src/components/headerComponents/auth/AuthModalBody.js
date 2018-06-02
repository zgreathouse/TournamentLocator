import React from 'react';

//components
import OAuthButton from './oauthButton';

const AuthModalBody = ({ modalType }) => {
  return (
    <div className="modal-content">
      <h3 className="modal-greeting" >
        {modalType} with <br/> Google or Facebook!
      </h3>
      <div className="oauth-button-container">
        <OAuthButton modalType={modalType} authenticator="google"/>
        <OAuthButton modalType={modalType} authenticator="facebook"/>
      </div>
    </div>
  )
}

export default AuthModalBody;
