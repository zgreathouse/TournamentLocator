/*
TODO this input is currently broken
issue: not setting file after selection

add a helper method to handle updating the value of the field on file select
*/

import React from 'react';

const FileInput = (field) => {
  return (
    <div style={{margin: "0 250px 15px 130px"}}>
      <label htmlFor="banner" style={{marginRight: "10px"}}>
        {field.label}
      </label>
      <input type="file" color="#403f42" {...field.input} value=""/>
    </div>
  )
}

export default FileInput;