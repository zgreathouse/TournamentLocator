import React from 'react';

const SeriesIcon = ({ tournament }) => {
  if(!tournament.series) {
    return <div></div>
  }

  return (
    <div>
      Series Icon!
    </div>
  )

}

export default SeriesIcon;
