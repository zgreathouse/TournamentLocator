import React from 'react';
import { convertToReadable } from '../../util/helperFunctions';

const UserDetail = ({ user }) => {
  return (
    <div>
      <div>City: {user.city}</div>
      <div>Travel Radius: {user.travelRange} miles</div>
      <div>Games: {convertToReadable(user.followedGames)}</div>
    </div>
  )
}

export default UserDetail;
