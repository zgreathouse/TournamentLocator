import React from 'react';
import { convertToReadable } from '../../util/helperFunctions';

const UserDetail = ({ user }) => {
  return (
    <div>
      <div className="user-info-piece">
        <h4>City: </h4>
        <p>{user.city}</p>
      </div>
      <div className="user-info-piece">
        <h4>Travel Radius:</h4>
        <p>{user.travelRange} miles</p>
      </div>
      <div className="user-info-piece">
        <h4>Games:</h4>
        <p>{convertToReadable(user.followedGames)}</p>
      </div>
    </div>
  )
}

export default UserDetail;
