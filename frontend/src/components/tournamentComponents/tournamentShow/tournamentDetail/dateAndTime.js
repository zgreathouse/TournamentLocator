import React from 'react';

const DateAndTime = ({ tournament }) => {
  const { date, startTime, endTime } = tournament;

  return (
    <div style={{
      margin: "15px",
      padding: "10px",
      border: "solid black 1px",
      boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>Date: {date}</div>
      <div>
        <div>Start: {startTime} </div>
        <div>End: {endTime} </div>
      </div>
    </div>
  )
}

export default DateAndTime;