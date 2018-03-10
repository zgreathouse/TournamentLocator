import React from 'react';

const Fees = ({ tournament }) => {
  const { venueFee, entryFee, potBonus } = tournament;

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        border: "1px solid #403f42"
    }}>
      <div>Venue Fee: {venueFee}</div>
      <div>Entry Fee: {entryFee}</div>
      <div>Pot Bonus: {potBonus}</div>
    </div>
  )
}

export default Fees;
