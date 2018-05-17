import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { FIELDS, unrequiredFields } from '../../../util/tournamentFormFields';

//actions
import { createTournament, editTournament } from '../../../actions/tournamentActions';

//components
import GeneralDetails from './generalDetails';
import Location from './location';
import Social from './social';
import Time from './time';
import Fees from './fees';
import Description from './description';
import SubmitButton from '../formButtons/submitButton';

class TournamentForm extends Component {
  onCancel() {
    if (window.confirm("Leaving this page before submitting will result in losing all progress made on this form. Are you sure you would like to cancel? ")) {
      this.props.history.push('/tournaments');
    }
  }

  onSubmit(values) {
    let splitPath = this.props.match.path.split("/");

    if (splitPath[splitPath.length - 1] === "new") {
      this.props.createTournament(values, () => {
        this.props.history.push('/tournaments');
      });
    } else {
      this.props.editTournament(this.props.match.params.id, values, () => {
        this.props.history.push(`/tournaments/${this.props.match.params.id}`);
      });
    }
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
})(connect(null, { createTournament, editTournament })(TournamentForm));
