import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createTournament } from '../../../actions/tournamentActions';
import { FIELDS, unrequiredFields } from '../../../util/formFields';

class TournamentForm extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div
        className={className}
        style={{margin: "0 50px 10px 50px"}}
      >
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div
          className="text-help"
          style={{fontStyle: "italic", color: "#2bbbad"}}
        >
          {touched && error}
        </div>
      </div>
    )
  }

  renderFields() {
    return _.map(FIELDS, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={this.renderField}
          type={type}
          label={label}
          name={name}
        />
      );
    })
  }

  onSubmit(values) {
    this.props.createTournament(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        style={{margin: "50px 0 80px 0"}}
      >
        {this.renderFields()}
        <div>
          <button
            type="submit"
            className="btn left"
            style={{marginLeft: "50px"}}
            text="submit"
          >Submit</button>
          <Link
            to="/"
            className="btn right"
            style={{marginRight: "50px"}}
          >Cancel</Link>
        </div>
      </form>
    )
  }
}


const validate = values => {
  const errors = {};
  const requiredFields = _.omit(FIELDS, unrequiredFields);

  //validate inputs
  _.each(requiredFields, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = `Please enter ${errorMessage}.`;
    }
  });

  return errors;
}

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'TournamentNewForm',
  validate
})(
  connect(null, { createTournament })(TournamentForm)
);
