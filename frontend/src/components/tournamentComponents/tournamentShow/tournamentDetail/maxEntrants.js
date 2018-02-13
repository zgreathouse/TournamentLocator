import React from 'react';

const MaxEntrants = ({ tournament }) => {
  const { maxEntrants } = tournament;

  return (
    <div
        style={{
        margin: "15px",
        padding: "10px",
        border: "solid black 1px",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}
    >
      <div>Size: {maxEntrants} entrants</div>
    </div>
  )
}

export default MaxEntrants;
