import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditTournamentButton extends Component {
  render() {
    const { tournament, currentUser } = this.props;

    if(tournament._user === currentUser._id) {
      return (
        <button className="btn right">
          Edit
        </button>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth
});

export default connect(mapStateToProps)(EditTournamentButton);
