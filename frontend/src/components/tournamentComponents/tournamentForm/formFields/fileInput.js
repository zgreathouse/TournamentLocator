/*
TODO this input is currently broken
issue: not setting file after selection

add a helper method to handle updating the value of the field on file select
*/

import React, { Component } from 'react';

class FileInput extends Component {

  setImage(e) {
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const { label, input } = this.props;

    return (
      <div style={{margin: "0 250px 15px 130px"}}>
        <label htmlFor="banner" style={{marginRight: "10px"}}>
          {label}
        </label>
        <input type="file" color="#403f42" {...input} value="" onChange={this.setImage}/>
      </div>
    )
  }
}

export default FileInput;
