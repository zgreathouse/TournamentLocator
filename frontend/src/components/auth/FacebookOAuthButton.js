import React from 'react';

const FacebookOAuthButton = ({ modalType }) => {
  return (
    <a
      href='auth/facebook'
      className="waves-effect waves-light btn social facebook"
      style={{backgroundColor: "#3b5998"}}
    >
    <i className="fa fa-facebook"></i> {modalType} with facebook</a>
  )
}

export default FacebookOAuthButton;
