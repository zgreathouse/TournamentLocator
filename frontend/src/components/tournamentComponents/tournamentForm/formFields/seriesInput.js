import React from 'react';

//TODO fix error handling for this input

const SeriesInput = (field) => {
  return (
    <div style={{margin: "0 250px 10px 130px"}}>
      <p style={{marginRight: "10px", color: "#9e9e9e"}}>Is your tournament held weekly?</p>
      {/*'yes' radio button*/}
      <input
        type="radio"
        id="seriesYes"
        value="yes"
        color="#403f42"
        {...field.input}
      />
      <label htmlFor="seriesYes" style={{marginRight: "10px"}}>Yes</label>
      {/*'no' radio button*/}
      <input
        type="radio"
        id="seriesNo"
        value="no"
        color="#403f42"
        checked
        {...field.input}
      />
      <label htmlFor="seriesNo" style={{marginRight: "10px"}}>No</label>
    </div>
  )
}

export default SeriesInput;
