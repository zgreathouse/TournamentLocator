import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const Sponsors = ({ tournament }) => {
  const { sponsors } = tournament;

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>
        Sponsors: {convertToReadable(sponsors)}
      </div>
    </div>
  )
}

export default Sponsors;
