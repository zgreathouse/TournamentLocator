import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournaments } from '../../actions/tournamentActions';

class TournamentIndex extends Component {
  componentDidMount() {
    this.props.fetchTournaments();
    console.log(this.props.tournaments);
  }

  renderTournaments() {
    return this.props.tournaments.map(tournament => {
      return (
        <li
          key={tournament.title}
          className="list-group-item"
        >
          {tournament.title}
        </li>
      )
    })
  }

  render() {
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
