import React from 'react';
import { renderBody } from '../../../../util/helperFunctions';

const Description = ({ tournament }) => {
  const { description } = tournament;

  if (!description) {
    return <div></div>
  }

  return (
    <section className="tournament-description-container">
      <strong>Description:</strong> <br/>
      <div className="body-text">
        {renderBody(description)}
      </div>
    </section>
  )
}

export default Description;
