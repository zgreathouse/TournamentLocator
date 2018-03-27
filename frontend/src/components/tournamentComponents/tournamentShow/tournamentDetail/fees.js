import React from 'react';

const Fees = ({ tournament }) => {
  const { venueFee, entryFee, potBonus } = tournament;

  return (
    <div>
      <div>Venue Fee: {venueFee}</div>
      <div>Entry Fee: {entryFee}</div>
      <div>Pot Bonus: {potBonus}</div>
    </div>
  )
}

export default Fees;
