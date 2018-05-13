import React from 'react';

const TextareaInput = (field) => {
  return (
    <div className="input-container">
      {field.label ? <label>{field.label}</label>: <div></div>}
      <br/>
      <textarea
        placeholder="Anything you'd like to add?"
        style={{"padding": "5px"}}
        rows="8"
        cols="80"
        {...field.input}
      />
    </div>
  )
}

export default TextareaInput;
