import React from 'react';

const MaxEntrants = ({ tournament }) => {
  const { maxEntrants } = tournament;

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        border: "1px solid #403f42"
    }}>
      <div>Size: {maxEntrants} entrants</div>
    </div>
  )
}

export default MaxEntrants;
