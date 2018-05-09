import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileLink = ({ userID }) => {
  return (
    <Link to={`/user/profile/${userID}`} className="auth-button">Profile</Link>
  )
}

export default UserProfileLink;
