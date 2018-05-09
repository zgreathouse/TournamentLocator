import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const Sponsors = ({ tournament }) => {
  const { sponsors } = tournament;
  let sponsorList = <div></div>;

  if (sponsors && sponsors.length > 0) {
    sponsorList = <div>Sponsors: {convertToReadable(sponsors)}</div>;
  }

  return (
    <div>
      {sponsorList}
    </div>
  )
}

export default Sponsors;
