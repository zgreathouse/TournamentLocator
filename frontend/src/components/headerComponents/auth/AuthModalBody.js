//modules
import React from 'react';

//components
import FacebookOAuthButton from './FacebookOAuthButton';
import GoogleOAuthButton from './GoogleOAuthButton';

const AuthModalBody = ({modalType}) => {
  return (
    <div>
      <div>
        {modalType} with Google or Facebook!
      </div>
      <GoogleOAuthButton modalType={modalType}/>
      <FacebookOAuthButton modalType={modalType}/>
    </div>
  )
}

export default AuthModalBody;
