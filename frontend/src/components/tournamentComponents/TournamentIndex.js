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
        <li key={tournament.title}>
          <TournamentIndexItem tournament={tournament} />
        </li>
      )
    })
  }

  render() {
    console.log(this.props.tournaments);
    return (
      <div>
        <h3>Tournaments</h3>
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
