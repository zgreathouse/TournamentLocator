import React from 'react';

//TODO fix error handling for this input

const SeriesInput = (field) => {
  const { touched, error } = field.meta;
  //change styling based on whether the input has been selected
  const className = `${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className} style={{margin: "0 250px 10px 130px"}}>
      <label style={{marginRight: "10px"}}>Is your tournament held weekly?</label>
      {/*'yes' radio button*/}
      <input
        type="radio"
        id="seriesYes"
        value="true"
        color="#403f42"
        {...field.input}
      />
      <label htmlFor="seriesYes" style={{marginRight: "10px"}}>Yes</label>
      {/*'no' radio button*/}
      <input
        type="radio"
        id="seriesNo"
        value="false"
        color="#403f42"
        {...field.input}
      />
      <label htmlFor="seriesNo" style={{marginRight: "10px"}}>No</label>

      <div style={{fontStyle: "italic", color: "#2bbbad"}}>
        {touched && error}
      </div>
    </div>
  )
}

export default SeriesInput;
