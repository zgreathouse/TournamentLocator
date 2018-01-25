import React from 'react';

const GoogleOAuthButton = (props) => {
  return (
    <a
      href="auth/google"
      class="waves-effect waves-light btn social google"
    >
    <i class="fa fa-google"></i> Sign in with google</a>
  )
}

export default GoogleOAuthButton;
