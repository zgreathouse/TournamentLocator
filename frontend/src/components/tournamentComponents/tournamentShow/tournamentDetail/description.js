import React from 'react';

const Description = ({ tournament }) => {
  const { description } = tournament;

  return (
    <div>Description: {description}</div>
  )
}

export default Description;
