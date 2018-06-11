import React from 'react';
import {
  extractTime,
  extractDate,
  convertTo12HourTime
} from '../../../../util/helperFunctions';

const DateAndTime = ({ tournament }) => {
  const { startTime, endTime, seriesStartTime, seriesEndTime, seriesDay } = tournament;
  let date, start, end, label;

  startTime ? date = extractDate(startTime) : date = `${seriesDay}s`;
  startTime ? start = extractTime(startTime) : start = convertTo12HourTime(seriesStartTime);
  endTime ? end = extractTime(endTime) : end = convertTo12HourTime(seriesEndTime) ;
  endTime ? label = "Date" : label = "Weekday";

  return (
    <section>
      <div><strong>{label}:</strong> {date}</div>
      <div>
        <div><strong>Start:</strong> {start} </div>
        <div><strong>End:</strong> {end} </div>
      </div>
    </section>
  )
}

export default DateAndTime;
