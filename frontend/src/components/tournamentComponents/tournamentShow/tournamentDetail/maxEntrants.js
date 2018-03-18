import React from 'react';

const MaxEntrants = ({ tournament }) => {
  const { maxEntrants } = tournament;

  return (
    <div>
      <div>Size: {maxEntrants} entrants</div>
    </div>
  )
}

export default MaxEntrants;
