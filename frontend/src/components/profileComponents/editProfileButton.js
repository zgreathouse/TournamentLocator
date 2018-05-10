import React from 'react';
import { Link } from 'react-router-dom';

const EditProfileButton = () => {
  return (
    <div className="edit-button-container">
      <Link to="/user/edit" className="edit-button">
        Edit Profile
      </Link>
    </div>
  )
}

export default EditProfileButton;
