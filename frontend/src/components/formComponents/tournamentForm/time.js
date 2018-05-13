import React from 'react';
import { TIME_FIELDS } from '../../../util/tournamentFormFields';
import { Field } from 'redux-form';
import uuidv4 from 'uuid/v4';

//components
import DateInput from '../formFields/dateInput';
import TimeInput from '../formFields/timeInput';

const Time = () => {
  const { date, startTime, endTime } = TIME_FIELDS;

  return (
    <section>
      <h3>Time</h3>
      <div className="fields-group">
        <Field key={uuidv4()}
          component={DateInput}
          type={date.type}
          label={date.label}
          name={date.name}
        />
        <Field key={uuidv4()}
          component={TimeInput}
          type={startTime.type}
          label={startTime.label}
          name={startTime.name}
        />
        <Field key={uuidv4()}
          component={TimeInput}
          type={endTime.type}
          label={endTime.label}
          name={endTime.name}
        />
      </div>
    </section>
  )
}

export default Time;
