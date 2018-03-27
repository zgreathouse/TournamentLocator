import React from 'react';

const MaxEntrants = ({ tournament }) => {
  const { maxEntrants } = tournament;

  return (
    <div>
      Size: {maxEntrants} entrants
    </div>
  )
}

export default MaxEntrants;
