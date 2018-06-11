import React from 'react';

const VenueAddress = ({ tournament }) => {
  const { streetAddress, city } = tournament;

  return (
    <section>
      <strong>Venue Address:</strong> {streetAddress}, {city}
    </section>
  )
}

export default VenueAddress
