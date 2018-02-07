import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournaments } from '../../actions/tournamentActions';


//components
import TournamentIndexItem from './TournamentIndexItem';

class TournamentIndex extends Component {

  componentDidMount() {
    this.props.fetchTournaments();
  }

  renderTournamentList() {
    return _.map(this.props.tournaments.entities, (tournament => {
      return (
        <li key={tournament.title} className="list-group-item">
          <TournamentIndexItem tournament={tournament} />
        </li>
      )
    }))
  }

  render() {
    if(!this.props.tournaments) {
      return (
        <div></div>
      )
    }

    return (
      <div className="row" style={{
        backgroundColor     : "#403f42",
        color               : "#fff",
        minWidth            : "40em",
        width               : "40%",
        marginLeft          : "5%",
        boxShadow           : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}>
        <h5 className="center brand-logo" style={{paddingTop: "10px"}}>Tournaments</h5>
        <ul className="col s5" style={{marginBottom: "10px"}}>
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
  mapStateToProps,
  { fetchTournaments }
)(TournamentIndex);
