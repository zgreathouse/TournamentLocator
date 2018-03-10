import React from 'react';

const Description = ({ tournament }) => {
  const { description } = tournament;

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        border: "1px solid #403f42"
    }}>
      <div>Description: {description}</div>
    </div>
  )
}

export default Description;
