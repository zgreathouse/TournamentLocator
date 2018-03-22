import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournaments } from '../../actions/tournamentActions';

//components
import TournamentIndexItem from './TournamentIndexItem';
import NewTournamentButton from './newTournamentButton';

class TournamentIndex extends Component {
  componentDidMount() {
    this.props.fetchTournaments();
  }

  renderTournamentList() {
    return _.map(this.props.tournaments.entities, (tournament => {
      return (
        <li key={tournament._id}>
          <TournamentIndexItem tournament={tournament} />
        </li>
      )
    }))
  }

  render() {
    if(!this.props.tournaments) {
      return <div>Loading Tournaments...</div>
    }

    return (
      <div>
        <h2 className="tournaments-greeting">
          Tournaments near you!
        </h2>
        <div className="tournaments-heading">
          <NewTournamentButton />
        </div>
        <ul className="tournament-list">
          {this.renderTournamentList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments
});

export default connect(
  mapStateToProps, { fetchTournaments }
)(TournamentIndex);
