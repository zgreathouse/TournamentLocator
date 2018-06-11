import React from 'react';

const MaxEntrants = ({ tournament }) => {
  const { maxEntrants } = tournament;

  return (
    <section>
      <strong>Size:</strong> {maxEntrants} entrants
    </section>
  )
}

export default MaxEntrants;
