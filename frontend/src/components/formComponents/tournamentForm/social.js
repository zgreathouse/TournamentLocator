import React from 'react';
import { Field } from 'redux-form';
import { SOCIAL_FIELDS } from '../../../util/tournamentFormFields';

//components
import TextInput from '../formFields/textInput';

const Social = () => {
  const { sponsors, streamLink, twitterLink } = SOCIAL_FIELDS;

  return (
    <section>
      <h3>Social Information</h3>
      <div className="fields-group">
        <Field key={sponsors.name}
          component={TextInput}
          type={sponsors.type}
          label={sponsors.label}
          name={sponsors.name}
        />
        <Field key={streamLink.name}
          component={TextInput}
          type={streamLink.type}
          label={streamLink.label}
          name={streamLink.name}
        />
        <Field key={twitterLink.name}
          component={TextInput}
          type={twitterLink.type}
          label={twitterLink.label}
          name={twitterLink.name}
        />
      </div>
    </section>
  )
}

export default Social;
