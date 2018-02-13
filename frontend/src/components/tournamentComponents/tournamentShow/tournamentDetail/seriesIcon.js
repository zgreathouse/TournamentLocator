import React from 'react';

const SeriesIcon = ({ tournament }) => {
  if(tournament.series === true) {
    return (
      <div style={{
        margin: "15px",
        padding: "10px",
        border: "solid black 1px",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}>Series Icon!</div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default SeriesIcon;
