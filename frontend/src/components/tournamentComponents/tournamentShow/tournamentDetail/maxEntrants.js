import React from 'react';

const MaxEntrants = ({ tournament }) => {
  const { maxEntrants } = tournament;

  return (
    <div>
      <strong>Size:</strong> {maxEntrants} entrants
    </div>
  )
}

export default MaxEntrants;
