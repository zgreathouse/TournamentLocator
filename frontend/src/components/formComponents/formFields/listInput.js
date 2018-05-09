import React from 'react';

const ListInput = (field) => {
  let fieldLabel = <label>{field.label}</label>

  if (field.label === "Tags" || field.label === "Sponsors" || field.label === "Favorite Games") {
    fieldLabel = (
      <label>
        {field.label} <p className="message">(please separate with commas)</p>
      </label>
    )
  }

  return (
    <div className="input-container">
      {fieldLabel}
      <br/>
      <input type="text" {...field.input}/>
    </div>
  )
}

export default ListInput;
