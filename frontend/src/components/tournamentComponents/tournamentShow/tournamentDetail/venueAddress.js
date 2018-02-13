import React from 'react';

const VenueAddress = ({ tournament }) => {
  const { venueAddress } = tournament;
  return (
    <div style={{
      margin: "15px",
      padding: "10px",
      boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>Venue Address: {venueAddress}</div>
    </div>
  )
}

export default VenueAddress
