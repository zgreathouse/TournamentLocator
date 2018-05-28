import React from 'react';
import { Field } from 'redux-form';
import { GENERAL_FIELDS } from '../../../util/tournamentFormFields';

//components
import TextInput from '../formFields/textInput';
import ListInput from '../formFields/listInput';
import NumberInput from '../formFields/numberInput';
import GeneralSection from './sectionTextGuides/generalSection';

const GeneralDetails = () => {
  const { title, game, maxEntrants, tags } = GENERAL_FIELDS;

  return (
    <section>
      <h3>General Details</h3>
      <div className='tournament-section-content'>
        <div className="fields-group">
          <GeneralSection/>
          <div style={{display: "flex"}}>
            <Field key={title.name}
              component={TextInput}
              type={title.type}
              label={title.label}
              name={title.name}
            />
            <Field key={game.name}
              component={TextInput}
              type={game.type}
              label={game.label}
              name={game.name}
            />
            <Field key={maxEntrants.name}
              component={NumberInput}
              type={maxEntrants.type}
              label={maxEntrants.label}
              name={maxEntrants.name}
            />
          </div>
          <div className="long-field">
            <Field key={tags.name}
              component={ListInput}
              type={tags.type}
              label={tags.label}
              name={tags.name}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default GeneralDetails;
