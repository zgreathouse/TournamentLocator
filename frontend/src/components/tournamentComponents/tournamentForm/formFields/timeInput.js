import React from 'react';

const TimeInput = (field) => {
  const { touched, error } = field.meta;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <input type="time" {...field.input}/>
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default TimeInput;
