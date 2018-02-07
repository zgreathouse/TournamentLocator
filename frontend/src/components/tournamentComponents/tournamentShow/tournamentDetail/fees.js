import React from 'react';

const Fees = ({ tournament }) => {
  const { venueFee, entryFee, potBonus } = tournament;
  
  return (
    <div style={{
      margin: "15px",
      padding: "10px",
      border: "solid black 1px",
      boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>Venue Fee: {venueFee}</div>
      <div>Entry Fee: {entryFee}</div>
      <div>Pot Bonus: {potBonus}</div>
    </div>
  )
}

export default Fees;
