import React from 'react';
import { Field } from 'redux-form';
import uuidv4 from 'uuid/v4';
import { GENERAL_FIELDS } from '../../../util/tournamentFormFields';

//components
import TextInput from '../formFields/textInput';
import ListInput from '../formFields/listInput';
import NumberInput from '../formFields/numberInput';

const GeneralDetails = () => {
  const { title, game, maxEntrants, tags } = GENERAL_FIELDS;

  return (
    <section>
      <h3>General Details</h3>
      <div className="fields-group">
        <Field key={uuidv4()}
          component={TextInput}
          type={title.type}
          label={title.label}
          name={title.name}
        />
        <Field key={uuidv4()}
          component={TextInput}
          type={game.type}
          label={game.label}
          name={game.name}
        />
        <Field key={uuidv4()}
          component={ListInput}
          type={tags.type}
          label={tags.label}
          name={tags.name}
        />
        <Field key={uuidv4()}
          component={NumberInput}
          type={maxEntrants.type}
          label={maxEntrants.label}
          name={maxEntrants.name}
        />
      </div>
    </section>
  )
}

export default GeneralDetails;
