//modules
import React from 'react';

const FacebookOAuthButton = ({ modalType }) => {
  return (
    <div className="oauth-button facebook">
      <a href='/auth/facebook'>
      <i className="fa fa-facebook"></i> {modalType} with facebook</a>
    </div>
  )
}

export default FacebookOAuthButton;
