import React from 'react';

const SeriesIcon = ({ tournament }) => {
  if(tournament.series) {
    return (
      <div style={{
          margin: "15px",
          padding: "10px",
          boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}>
        Series Icon!
      </div>
    )
  }

  return <div></div>
}

export default SeriesIcon;
