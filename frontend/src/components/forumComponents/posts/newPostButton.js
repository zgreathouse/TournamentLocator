import React from 'react';

//components
import FormModal from './FormModal';

const NewPostButton = ({ tournamentID, user }) => {

  return (
    <div className="create-post-link">
      <FormModal modalText="Create Post!"/>
    </div>
  )
}

export default NewPostButton;

/* <Link to={`/tournaments/${tournamentID}/forum/new`}>
  Create Post!
</Link> */
