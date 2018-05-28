import React from 'react';
import { Field } from 'redux-form';
import { LOCATION_FIELDS } from '../../../util/tournamentFormFields';

//components
import TextInput from '../formFields/textInput';

const Location = () => {
  const { city, streetAddress } = LOCATION_FIELDS;

  return (
    <section>
      <h3>Location</h3>
      <div className='tournament-section-content'>
        <div className="fields-group-location">
          <Field key={city.name}
            component={TextInput}
            type={city.type}
            label={city.label}
            name={city.name}
          />
          <Field key={streetAddress.name}
            component={TextInput}
            type={streetAddress.type}
            label={streetAddress.label}
            name={streetAddress.name}
          />
        </div>
      </div>
    </section>
  )
}

export default Location;
