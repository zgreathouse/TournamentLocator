import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { fetchUserTournaments } from '../../actions/tournamentActions';

//components
import TournamentIndexItem from './TournamentIndexItem';

class TournamentIndex extends Component {
  componentDidMount() {
    this.props.fetchUserTournaments();
  }

  renderTournamentList() {
    return _.map(this.props.tournaments, (tournament => {
      return (
        <li key={tournament.title}>
          <TournamentIndexItem tournament={tournament} />
        </li>
      )
    }))
  }

  render() {

    return (
      <ul className="tournament-list">
        {this.renderTournamentList()}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments.entities,
});

export default connect(
  mapStateToProps, { fetchUserTournaments }
)(TournamentIndex);
