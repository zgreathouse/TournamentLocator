import React from 'react';

const VenueAddress = ({ tournament }) => {
  const { venueAddress } = tournament;
  return (
    <div style={{
      margin: "15px",
      padding: "10px",
      border: "1px solid #403f42"
    }}>
      <div>Venue Address: {venueAddress}</div>
    </div>
  )
}

export default VenueAddress
