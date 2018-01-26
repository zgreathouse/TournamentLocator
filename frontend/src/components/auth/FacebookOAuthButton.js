import React from 'react';

const FacebookOAuthButton = ({ modalType }) => {
  return (
    <a
      href='auth/facebook'
      className="hoverable center-align btn-large social facebook"
      style={{margin: "10px 0 10px 0", backgroundColor: "#3b5998", width: "300px"}}
    >
    <i className="fa fa-facebook"></i> {modalType} with facebook</a>
  )
}

export default FacebookOAuthButton;
