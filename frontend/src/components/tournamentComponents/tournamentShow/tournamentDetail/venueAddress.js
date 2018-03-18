import React from 'react';

const VenueAddress = ({ tournament }) => {
  const { venueAddress } = tournament;
  return (
    <div>
      <div>Venue Address: {venueAddress}</div>
    </div>
  )
}

export default VenueAddress
