import React from 'react';
import { extractTime, extractDate } from '../../../../util/helperFunctions';

const DateAndTime = ({ tournament }) => {
  const { startTime, endTime } = tournament;

  const date = extractDate(startTime);
  const start = extractTime(startTime);
  const end = extractTime(endTime);

  return (
    <div>
      <div>Date: {date}</div>
      <div>
        <div>Start: {start} </div>
        <div>End: {end} </div>
      </div>
    </div>
  )
}

export default DateAndTime;
