import React from 'react';

const SeriesIcon = ({ tournament }) => {
  if(tournament.series) {
    return (
      <div style={{
          margin: "15px",
          padding: "10px",
          border: "1px solid #403f42"
      }}>
        Series Icon!
      </div>
    )
  }

  return <div></div>
}

export default SeriesIcon;
