//a button which navigates the user to forum page
import React from 'react';
import { Link } from 'react-router-dom';

const ForumButton = ({tournamentID}) => {
  return (
    <div className="forum-button-container">
      <Link
        to={`/tournaments/${tournamentID}/forum`}
        className="forum-button"
      >Forum</Link>
    </div>
  )
}

export default ForumButton;
