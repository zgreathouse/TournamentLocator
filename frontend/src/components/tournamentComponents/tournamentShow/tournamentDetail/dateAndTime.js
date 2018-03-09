import React from 'react';
import { extractTime, extractDate } from '../../../../util/helperFunctions';

const DateAndTime = ({ tournament }) => {
  const { startTime, endTime } = tournament;

  const date = extractDate(startTime);
  const start = extractTime(startTime);
  const end = extractTime(endTime);

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>Date: {date}</div>
      <div>
        <div>Start: {start} </div>
        <div>End: {end} </div>
      </div>
    </div>
  )
}

export default DateAndTime;
