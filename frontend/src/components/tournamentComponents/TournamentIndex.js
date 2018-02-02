import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournaments } from '../../actions/tournamentActions';

//components
import TournamentIndexItem from './TournamentIndexItem';

class TournamentIndex extends Component {
  componentDidMount() {
    this.props.fetchTournaments();
  }

  renderTournaments() {
    return this.props.tournaments.map(tournament => {
      return (
        <li key={tournament.title} className="list-group-item">
          <TournamentIndexItem tournament={tournament} />
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h4>Tournaments</h4>
        <ul className="list-group" style={{marginTop: "20px", marginBottom: "50px"}}>
          {this.renderTournaments()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments
});

export default connect(mapStateToProps, { fetchTournaments })(TournamentIndex);
