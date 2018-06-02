import React from 'react';

const Fees = ({ tournament }) => {
  const { venueFee, entryFee, potBonus } = tournament;

  return (
    <div>
      <div><strong>Venue Fee:</strong> {venueFee ? `$${venueFee}` : '$0'}</div>
      <div><strong>Entry Fee:</strong> {entryFee ? `$${entryFee}` : '$0'}</div>
      { potBonus ? <div><strong>Pot Bonus:</strong> {`$${potBonus}`}</div> : <div></div>}
    </div>
  )
}

export default Fees;
