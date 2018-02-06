import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournament, fetchTournaments } from '../../actions/tournamentActions';

class TournamentShow extends Component {
  componentDidMount() {
    this.props.fetchTournament(this.props.id);
  }

  render() {
    const { selectedTournament } = this.props;

    return (
      <div className="container">
        <h5 className="brand-logo">TournamentShow</h5>
        <div style={{marginLeft: "40px"}}>
          <h6>{selectedTournament.title}</h6>
          <p>Game: {selectedTournament.game}</p>
          <p>Date: {selectedTournament.date}</p>
          <p>Description: {selectedTournament.description}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedTournament: state.tournaments.selectedTournament,
  id: (ownProps.match.params.id) - "",
  state
})

export default connect(mapStateToProps, { fetchTournament, fetchTournaments })(TournamentShow);
