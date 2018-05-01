import React from 'react';

const TimeInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="input-container">
      <label>{field.label}</label>
      <br/>
      <input type="time" {...field.input}/>
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default TimeInput;
