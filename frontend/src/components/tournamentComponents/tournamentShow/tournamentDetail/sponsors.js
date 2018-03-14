import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const Sponsors = ({ tournament }) => {
  const { sponsors } = tournament;

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        border: "1px solid #403f42"
    }}>
      <div>
        Sponsors: {convertToReadable(sponsors)}
      </div>
    </div>
  )
}

export default Sponsors;
