import React from 'react';
import {
  extractTime,
  extractDate,
  convertTo12HourTime
} from '../../../../util/helperFunctions';

const DateAndTime = ({ tournament }) => {
  const { startTime, endTime, seriesStartTime, seriesEndTime, seriesDay } = tournament;
  let date;
  let start;
  let end;

  startTime ? date = extractDate(startTime) : date = seriesDay;
  startTime ? start = extractTime(startTime) : start = convertTo12HourTime(seriesStartTime);
  endTime ? end = extractTime(endTime) : end = convertTo12HourTime(seriesEndTime) ;

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
