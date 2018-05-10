import React from 'react';

const OAuthButton = ({ modalType, authenticator }) => {
  return (
    <div className={`oauth-button ${authenticator}`}>
      <a href={`/auth/${authenticator}`}>
        <i className={`fa fa-${authenticator}`}></i>
        {modalType} with {authenticator}
      </a>
    </div>
  )
}

export default OAuthButton;
