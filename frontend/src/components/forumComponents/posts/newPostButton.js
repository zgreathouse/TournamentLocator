import React from 'react';
import { Link } from 'react-router-dom';

const NewPostButton = ({ tournamentID, user }) => {
  if (user.finishAccountSetup) {
    return (
      <div className="create-tournament-link">
        <Link to={`/tournaments/${tournamentID}/forum/new`}>
          Create Post!
        </Link>
      </div>
    )
  }

  return <div></div>

}

export default NewPostButton;
