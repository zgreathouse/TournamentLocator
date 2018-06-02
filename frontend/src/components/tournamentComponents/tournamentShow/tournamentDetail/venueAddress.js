import React from 'react';

const VenueAddress = ({ tournament }) => {
  const { streetAddress, city } = tournament;

  return (
    <div><strong>Venue Address:</strong> {streetAddress}, {city}</div>
  )
}

export default VenueAddress
