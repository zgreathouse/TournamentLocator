import React from 'react';

const SeriesIcon = ({ tournament }) => {
  if(tournament.series) {
    return (
      <div>
        Series Icon!
      </div>
    )
  }

  return <div></div>
}

export default SeriesIcon;
