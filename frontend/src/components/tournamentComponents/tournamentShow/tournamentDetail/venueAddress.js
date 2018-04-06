import React from 'react';

const VenueAddress = ({ tournament }) => {
  const { venueAddress } = tournament;
  return (
    <div>Venue Address: {venueAddress}</div>
  )
}

export default VenueAddress
