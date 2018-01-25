import React from 'react';

const FacebookOAuthButton = (props) => {
  return (
    <a
      href='auth/facebook'
      class="waves-effect waves-light btn social facebook"
    >
    <i class="fa fa-facebook"></i> Sign in with facebook</a>
  )
}

export default FacebookOAuthButton;
