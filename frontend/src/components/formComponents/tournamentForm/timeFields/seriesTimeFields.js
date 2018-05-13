import React from 'react';
import { SERIES_TIME_FIELDS } from '../../../../util/tournamentFormFields';
import { Field } from 'redux-form';
import uuidv4 from 'uuid/v4';

//components
import weekdaySelect from '../../formFields/weekdaySelect';
import TimeInput from '../../formFields/timeInput';

const NonSeriesTimeFields = () => {
  const { seriesDay, seriesStartTime, seriesEndTime } = SERIES_TIME_FIELDS;

  return (
    <div className="fields-group">
      <div className="top-time-field">
        <Field key={uuidv4()}
          component={weekdaySelect}
          type={seriesDay.type}
          label={seriesDay.label}
          name={seriesDay.name}
        />
      </div>
      <div className="bottom-time-fields">
        <Field key={uuidv4()}
          component={TimeInput}
          type={seriesStartTime.type}
          label={seriesStartTime.label}
          name={seriesStartTime.name}
        />
        <Field key={uuidv4()}
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
