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
        <li key={tournament._id} className="list-group-item">
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
      <div style={{marginTop: "60px", display: "flex", justifyContent: "space-around"}}>
        <div className="row" style={{
          backgroundColor     : "#403f42",
          color               : "#fff",
          minWidth            : "40em",
          width               : "40%",
          marginLeft          : "5%"
        }}>
          <h5 className="center brand-logo" style={{paddingTop: "10px"}}>Tournaments</h5>
          <ul className="col s5" style={{marginBottom: "10px"}}>
            {this.renderTournamentList()}
          </ul>
        </div>
        <NewTournamentButton />
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
