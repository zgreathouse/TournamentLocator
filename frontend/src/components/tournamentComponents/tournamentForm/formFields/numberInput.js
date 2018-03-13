import React from 'react';

const NumberInput = (field) => {
  const { touched, error } = field.meta;
  const className = `${touched && error ? 'has-danger' : ''}`;

  let placeholder = '$0.00';

  if (field.label === 'Max Entrants') {
    placeholder = '0';
  }

  return (
    <div style={{margin: "0 250px 5px 130px"}}>
      <label>{field.label}</label>
      <input
        className={className}
        type="number"
        min='0'
        placeholder={`${placeholder}`}
        color="#403f42" {...field.input}
      />
      <div style={{fontStyle: "italic", color: "#2bbbad"}}>
        {touched && error}
      </div>
    </div>
  )
}

export default NumberInput;
