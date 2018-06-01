import React from 'react';
import { Link } from 'react-router-dom';

const NewPostButton = ({ tournamentID, user }) => {

  return (
    <div className="create-post-link">
      <Link to={`/tournaments/${tournamentID}/forum/new`}>
        Create Post!
      </Link>
    </div>
  )
}

export default NewPostButton;
