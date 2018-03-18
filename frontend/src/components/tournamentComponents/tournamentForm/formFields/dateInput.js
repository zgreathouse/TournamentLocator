//calender date input
import React from 'react';

const DateInput = (field) => {
  const { touched, error } = field.meta;
  const className = `${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <input type="date" {...field.input}/>
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default DateInput;
