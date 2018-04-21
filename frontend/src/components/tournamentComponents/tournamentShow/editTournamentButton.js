//a button which navigates the user to the edit tournamentpage
import React from 'react';
import { Link } from 'react-router-dom';

const EditTournamentButton = ({ tournament, currentUser }) => {
  if(!currentUser) {
    return <div></div>
  }

  if(tournament._user === currentUser._id) {
    return (
      <div className="edit-button-container">
        <Link to={`/tournaments/${tournament._id}/edit`} className="edit-button">Edit</Link>
      </div>
    )
  }

  return <div></div>
}

export default EditTournamentButton;
