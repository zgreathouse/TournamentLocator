import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournament } from '../../actions/tournamentActions';

class TournamentShow extends Component {
  componentDidMount() {
    this.props.fetchTournament(this.props.id);
  }

  render() {
    const { tournament } = this.props

    return (
      <div className="container">
        <h5 className="brand-logo">TournamentShow</h5>
        <div style={{marginLeft: "40px"}}>
          <h6>{tournament.title}</h6>
          <p>Game: {tournament.game}</p>
          <p>Date: {tournament.date}</p>
          <p>Description: {tournament.description}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  tournament: state.tournaments,
  id: (ownProps.match.params.id) - ""
})

export default connect(mapStateToProps, { fetchTournament })(TournamentShow);
