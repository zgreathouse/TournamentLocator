import React from 'react';

const TextareaInput = (field) => {
  return (
    <div style={{margin: "0 250px 5px 130px"}}>
      <label>{field.label}</label>
      <textarea
        placeholder="Anything you'd like to add?"
        rows="8"
        cols="80"
        style={{resize: "none", height: "auto", padding: "10px"}}
        {...field.input}
      />
    </div>
  )
}

export default TextareaInput;
