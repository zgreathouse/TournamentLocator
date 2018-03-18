//a button which navigates the user to the edit tournamentpage
import React from 'react';

const EditTournamentButton = ({ tournament, currentUser }) => {
  if(!currentUser) {
    return <div></div>
  }

  if(tournament._user === currentUser._id) {
    return (
      <button>
        Edit
      </button>
    )
  }

  return <div></div>
}

export default EditTournamentButton;
