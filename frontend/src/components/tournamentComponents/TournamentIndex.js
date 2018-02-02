import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournaments } from '../../actions/tournamentActions';

//components
import TournamentIndexItem from './TournamentIndexItem';

class TournamentIndex extends Component {
  componentWillMount() {
    this.props.fetchTournaments();
  }

  renderTournamentList() {
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
      <div className="row" style={{backgroundColor: "#403f42", color: "#fff", minWidth: "40em", width: "40%", marginLeft: "5%"}}>
        <p className="flow-text" style={{ textAlign: "center"}}>Tournaments</p>
        <ul className="col s5" style={{marginBottom: "30px"}}>
          {this.renderTournamentList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments
});

export default connect(mapStateToProps, { fetchTournaments })(TournamentIndex);
