import React from 'react';
import { Field } from 'redux-form';

//components
import TextareaInput from '../formFields/textareaInput';
import DescriptionSection from './sectionTextGuides/descriptionSection';

const GeneralDetails = () => {
  return (
    <section style={{"border": "none"}}>
      <h3>Description</h3>
      <div className='tournament-section-content-description'>
        <DescriptionSection/>
        <div className="fields-group">
          <Field
            key='description'
            component={TextareaInput}
            type='input'
            label=''
            name='description'
            placeholder="Anything you'd like to add?"
          />
        </div>
      </div>
    </section>
  )
}

export default GeneralDetails;
