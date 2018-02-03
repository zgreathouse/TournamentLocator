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
          <h6>{tournament[0].title}</h6>
          <p>Game: {tournament[0].game}</p>
          <p>Date: {tournament[0].date}</p>
          <p>Description: {tournament[0].description}</p>
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
