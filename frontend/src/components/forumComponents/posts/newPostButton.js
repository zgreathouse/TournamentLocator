//a button which navigates the user to the tournament form page
import React from 'react';
import { Link } from 'react-router-dom';

const NewPostButton = ({tournamentID}) => {
  return (
    <div className="create-tournament-link">
      <Link to={`/tournaments/${tournamentID}/forum/new`}>
          Create Post!
      </Link>
    </div>
  )
}

export default NewPostButton;
