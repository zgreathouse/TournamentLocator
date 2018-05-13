import React from 'react';
import { NON_SERIES_TIME_FIELDS } from '../../../../util/tournamentFormFields';
import { Field } from 'redux-form';
import uuidv4 from 'uuid/v4';

//components
import DateInput from '../../formFields/dateInput';
import TimeInput from '../../formFields/timeInput';

const NonSeriesTimeFields = () => {
  const { date, startTime, endTime } = NON_SERIES_TIME_FIELDS;

  return (
    <div className="fields-group">
      <div className="top-time-field">
        <Field key={uuidv4()}
          component={DateInput}
          type={date.type}
          label={date.label}
          name={date.name}
        />
      </div>
      <div className="bottom-time-fields">        
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
    </div>
  )
}

export default NonSeriesTimeFields;
