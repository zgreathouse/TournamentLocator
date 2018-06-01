import React from 'react';

const Fees = ({ tournament }) => {
  const { venueFee, entryFee, potBonus } = tournament;

  return (
    <div>
      <div>Venue Fee: {venueFee ? `$${venueFee}` : '$0'}</div>
      <div>Entry Fee: {entryFee ? `$${entryFee}` : '$0'}</div>
      { potBonus ? <div>Pot Bonus: {`$${potBonus}`}</div> : <div></div>}
    </div>
  )
}

export default Fees;
