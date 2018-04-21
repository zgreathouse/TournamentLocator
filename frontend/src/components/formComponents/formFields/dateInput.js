//calender date input
import React from 'react';

const DateInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="input-container">
      <label>{field.label}</label>
      <br/>
      <input type="date" {...field.input}/>
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default DateInput;
