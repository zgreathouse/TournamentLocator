import React from 'react';
import { SERIES_TIME_FIELDS } from '../../../../util/tournamentFormFields';
import { Field } from 'redux-form';

//components
import TimeInput from '../../formFields/timeInput';
import Errors from '../../formFields/errors';

const NonSeriesTimeFields = () => {
  const { seriesDay, seriesStartTime, seriesEndTime } = SERIES_TIME_FIELDS;

  return (
    <div className="fields-group">
      <div className="top-time-field">
        <label>{seriesDay.label}</label>
        <br/>
        <Field key={seriesDay.name}
          component="select"
          type={seriesDay.type}
          name={seriesDay.name}
          style={{'backgroundColor': '#fff'}}
        >
          <option value=""></option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </Field>
        <Field key={seriesDay.name}
          component={Errors}
          type={seriesDay.type}
          name={seriesDay.name}
        />
      </div>
      <div className="bottom-time-fields">
        <Field key={seriesStartTime.name}
          component={TimeInput}
          type={seriesStartTime.type}
          label={seriesStartTime.label}
          name={seriesStartTime.name}
        />
        <Field key={seriesEndTime.name}
          component={TimeInput}
          type={seriesEndTime.type}
          label={seriesEndTime.label}
          name={seriesEndTime.name}
        />
      </div>
    </div>
  )
}

export default NonSeriesTimeFields;
