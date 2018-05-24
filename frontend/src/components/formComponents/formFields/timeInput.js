import React from 'react';

const TimeInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="time-input-container">
      <label>{field.label}</label>
      <br/>
      <input type="time" {...field.input}/>
      <div className="form-field-error">{touched && error}</div>
    </div>
  )
}

export default TimeInput;
