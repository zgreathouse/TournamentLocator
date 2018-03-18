import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const Sponsors = ({ tournament }) => {
  const { sponsors } = tournament;

  return (
    <div>
      <div>
        Sponsors: {convertToReadable(sponsors)}
      </div>
    </div>
  )
}

export default Sponsors;
