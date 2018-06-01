import React from 'react';
import { Link } from 'react-router-dom';

const ForumHeader = ({ route }) => {
  return (
    <div className="forum-header">
      <Link className="go-back-button" to={route}> Go Back </Link>
      <h2>Forum</h2>
    </div>
  )
}

export default ForumHeader;
