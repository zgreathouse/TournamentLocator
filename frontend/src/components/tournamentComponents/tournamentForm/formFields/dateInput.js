//calender date input
import React from 'react';

const DateInput = (field) => {
  const { touched, error } = field.meta;
  const className = `${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className} style={{margin: "0 250px 5px 130px"}}>
      <label>{field.label}</label>
      <input type="date" color="#403f42" {...field.input}/>
      <div style={{fontStyle: "italic", color: "#2bbbad"}}>
        {touched && error}
      </div>
    </div>
  )
}

export default DateInput;
