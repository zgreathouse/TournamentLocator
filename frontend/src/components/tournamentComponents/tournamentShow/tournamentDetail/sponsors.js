import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const Sponsors = ({ tournament }) => {
  const { sponsors } = tournament;

  if (!sponsors || sponsors.length === 0) {
    return <div></div>
  }

  return (
    <section>
      <div>
        <strong>Sponsors:</strong> {convertToReadable(sponsors)}
      </div>
    </section>
  )
}

export default Sponsors;
