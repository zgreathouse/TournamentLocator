import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const Sponsors = ({ tournament }) => {
  const { sponsors } = tournament;

  return (
    <div>
      Sponsors: {convertToReadable(sponsors)}
    </div>
  )
}

export default Sponsors;
