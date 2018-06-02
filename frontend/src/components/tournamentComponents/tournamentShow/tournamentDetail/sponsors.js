import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const Sponsors = ({ tournament }) => {
  const { sponsors } = tournament;
  let sponsorList = <div></div>;

  if (sponsors && sponsors.length > 0) {
    sponsorList = <div><strong>Sponsors:</strong> {convertToReadable(sponsors)}</div>;
  }

  return (
    <div>
      {sponsorList}
    </div>
  )
}

export default Sponsors;
