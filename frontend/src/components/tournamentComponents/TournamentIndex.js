import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { fetchTournaments } from '../../actions/tournamentActions';

//components
import TournamentIndexItem from './TournamentIndexItem';
import NewTournamentButton from './newTournamentButton';

class TournamentIndex extends Component {
  componentDidMount() {
    this.props.fetchTournaments();
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
    const { tournaments, currentUser } = this.props;

    if(!tournaments || !currentUser) {
      return (
        <div>
          <h2 className="tournaments-greeting">
            Loading Tournaments...
          </h2>
        </div>
      )
    }

    return (
      <div>
        <h2 className="tournaments-greeting">
          Tournaments near you!
        </h2>
        <div className="tournaments-heading">
          <NewTournamentButton user={currentUser}/>
        </div>
        <ul className="tournament-list">
          {this.renderTournamentList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments.entities,
  currentUser: state.auth
});

export default connect(
  mapStateToProps, { fetchTournaments }
)(TournamentIndex);
