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
  let label;

  startTime ? date = extractDate(startTime) : date = seriesDay;
  startTime ? start = extractTime(startTime) : start = convertTo12HourTime(seriesStartTime);
  endTime ? end = extractTime(endTime) : end = convertTo12HourTime(seriesEndTime) ;
  endTime ? label = "Date" : label = "Weekday";

  return (
    <div>
      <div><strong>{label}:</strong> {date}</div>
      <div>
        <div><strong>Start:</strong> {start} </div>
        <div><strong>End:</strong> {end} </div>
      </div>
    </div>
  )
}

export default DateAndTime;
