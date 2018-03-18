import React from 'react';

const NumberInput = (field) => {
  const { touched, error } = field.meta;
  const className = `${touched && error ? 'has-danger' : ''}`;

  let placeholder = '$0.00';

  if (field.label === 'Max Entrants') {
    placeholder = '0';
  }

  return (
    <div>
      <label>{field.label}</label>
      <input
        className={className}
        type="number"
        min='0'
        placeholder={`${placeholder}`}
        {...field.input}
      />
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default NumberInput;
