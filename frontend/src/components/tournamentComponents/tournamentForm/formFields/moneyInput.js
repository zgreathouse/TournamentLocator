import React from 'react';

const MoneyInput = (field) => {
  return (
    <div style={{margin: "0 250px 10px 130px"}}>
      <label>{field.label}</label>
      <input type="number" color="#403f42" {...field.input}/>
    </div>
  )
}

export default MoneyInput;
