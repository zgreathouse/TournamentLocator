import React from 'react';

const SeriesInput = (field) => {
  const { touched, error } = field.meta;
  //change styling based on whether the input has been selected
  const className = `${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className} style={{margin: "0 250px 5px 130px"}}>
      <label style={{marginRight: "10px"}}>Is your tournament held weekly?</label>
      <input
        type="radio"
        id="seriesYes"
        value="true"
        color="#403f42"
        {...field.input}
      />
      <label for="seriesYes" style={{marginRight: "10px"}}>Yes</label>

      <input
        type="radio"
        id="seriesNo"
        value="false"
        color="#403f42"
        {...field.input}
      />
      <label for="seriesNo" style={{marginRight: "10px"}}>No</label>

      <div style={{fontStyle: "italic", color: "#2bbbad"}}>
        {touched && error}
      </div>
    </div>
  )
}

export default SeriesInput;
