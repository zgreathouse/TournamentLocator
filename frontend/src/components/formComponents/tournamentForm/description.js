import React from 'react';
import { Field } from 'redux-form';
import uuidv4 from 'uuid/v4';

//components
import TextareaInput from '../formFields/textareaInput';

const GeneralDetails = () => {
  return (
    <section style={{"border": "none"}}>
      <h3>Description</h3>
      <div className="fields-group">
        <Field
          key='description'
          component={TextareaInput}
          type='input'
          label=''
          name='description'
        />
      </div>
    </section>
  )
}

export default GeneralDetails;
