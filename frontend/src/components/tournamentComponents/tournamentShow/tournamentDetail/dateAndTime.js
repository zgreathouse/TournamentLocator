import React from 'react';
import { extractTime, extractDate } from '../../../../util/helperFunctions';

const DateAndTime = ({ tournament }) => {
  const { startTime, endTime } = tournament;

  let date = extractDate(startTime);
  let start = extractTime(startTime);
  let end = extractTime(endTime);

  console.log(date);
  console.log(start);
  console.log(end);

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
