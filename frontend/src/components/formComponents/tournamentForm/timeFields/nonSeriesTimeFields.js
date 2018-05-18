import React from 'react';
// import uuidv4 from 'uuid/v4';
import { NON_SERIES_TIME_FIELDS } from '../../../../util/tournamentFormFields';
import { Field } from 'redux-form';

//components
import DateInput from '../../formFields/dateInput';
import TimeInput from '../../formFields/timeInput';

const NonSeriesTimeFields = () => {
  const { date, startTime, endTime } = NON_SERIES_TIME_FIELDS;

  return (
    <div className="fields-group">
      <div className="top-time-field">
        <Field key={date.name}
          component={DateInput}
          type={date.type}
          label={date.label}
          name={date.name}
        />
      </div>
      <div className="bottom-time-fields">
        <Field key={startTime.name}
          component={TimeInput}
          type={startTime.type}
          label={startTime.label}
          name={startTime.name}
        />
        <Field key={endTime.name}
          component={TimeInput}
          type={endTime.type}
          label={endTime.label}
          name={endTime.name}
        />
      </div>
    </div>
  )
}

export default NonSeriesTimeFields;
