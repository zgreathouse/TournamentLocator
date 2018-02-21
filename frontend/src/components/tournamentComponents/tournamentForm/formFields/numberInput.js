import React from 'react';

const NumberInput = (field) => {
  let placeholder = '0.00';

  if (field.label === 'Max Entrants') {
    placeholder = '0';
  }

  return (
    <div style={{margin: "0 250px 10px 130px"}}>
      <label>{field.label}</label>
      <input type="number" min='0' placeholder={`${placeholder}`} color="#403f42" {...field.input}/>
    </div>
  )
}

export default NumberInput;
