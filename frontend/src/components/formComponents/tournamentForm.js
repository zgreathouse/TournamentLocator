import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { FIELDS, unrequiredFields } from '../../util/tournamentFormFields';

//actions
import { createTournament } from '../../actions/tournamentActions';

//components
import GeneralDetails from './tournamentForm/generalDetails';
import Location from './tournamentForm/location';
import Social from './tournamentForm/social';
import Time from './tournamentForm/time';
import Fees from './tournamentForm/fees';
import Description from './tournamentForm/description';
import SubmitButton from './formButtons/submitButton';

class TournamentForm extends Component {
  onCancel() {
    if (window.confirm("Leaving this page before submitting will result in losing all progress made on this form. Are you sure you would like to cancel? ")) {
      this.props.history.push('/tournaments');
    }
  }

  onSubmit(values) {
    this.props.createTournament(values, () => {
      this.props.history.push('/tournaments');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="tournament-form-container">
        <h2>Tournament Form</h2>
        <form
          className="tournament-form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <GeneralDetails />
          <Location />
          <Social />
          <Time />
          <Fees />
          <Description />
          <div className="form-buttons">
            <SubmitButton />
            <button className="cancel-button"
              onClick={this.onCancel.bind(this)}
            >Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

//form validations
const validate = values => {
  const errors = {};
  const requiredFields = _.omit(FIELDS, unrequiredFields);

  //validate inputs
  _.each(requiredFields, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = `Please enter ${errorMessage}.`;
    }
  });

  if (_.keys(values).indexOf("seriesDay") === -1) {
    errors["seriesDay"] = `Please enter the day of the week your tournament will be held on.`;
  }

  return errors;
}

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'TournamentNewForm',
  validate
})(connect(null, { createTournament })(TournamentForm));
