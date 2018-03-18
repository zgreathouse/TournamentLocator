//modules
import React from 'react';

const FacebookOAuthButton = ({ modalType }) => {
  return (
    <a href='/auth/facebook'>
    <i className="fa fa-facebook"></i> {modalType} with facebook</a>
  )
}

export default FacebookOAuthButton;
