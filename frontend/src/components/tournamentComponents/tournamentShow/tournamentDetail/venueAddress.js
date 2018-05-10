import React from 'react';

const VenueAddress = ({ tournament }) => {
  const { streetAddress, city } = tournament;

  return (
    <div>Venue Address: {streetAddress}, {city}</div>
  )
}

export default VenueAddress
