import React from 'react';

const MoneyInput = (field) => {
  const { touched, error } = field.meta;
  //change styling based on whether the input has been selected
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className} style={{margin: "0 250px 10px 130px"}}>
      <label>{field.label}</label>
      <input type="number" color="#403f42" {...field.input}/>
    </div>
  )
}

export default MoneyInput;
