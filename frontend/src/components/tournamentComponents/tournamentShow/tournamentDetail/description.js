import React from 'react';

const Description = ({ tournament }) => {
  const { description } = tournament;

  return (
    <div>
      <div>Description: {description}</div>
    </div>
  )
}

export default Description;
