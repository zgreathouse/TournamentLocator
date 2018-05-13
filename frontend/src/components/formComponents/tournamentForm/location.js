import React from 'react';
import { Field } from 'redux-form';
import uuidv4 from 'uuid/v4';
import { LOCATION_FIELDS } from '../../../util/tournamentFormFields';

//components
import TextInput from '../formFields/textInput';

const Location = () => {
  const { city, streetAddress } = LOCATION_FIELDS;

  return (
    <section>
      <h3>Location</h3>
      <div className="fields-group">        
        <Field key={uuidv4()}
          component={TextInput}
          type={city.type}
          label={city.label}
          name={city.name}
        />
        <Field key={uuidv4()}
          component={TextInput}
          type={streetAddress.type}
          label={streetAddress.label}
          name={streetAddress.name}
        />
      </div>
    </section>
  )
}

export default Location;
