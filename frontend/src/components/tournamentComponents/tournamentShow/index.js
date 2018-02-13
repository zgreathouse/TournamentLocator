import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournament } from '../../../actions/tournamentActions';

//components
import TournamentDetail from './tournamentDetail';
import ForumButton from './forumButton';
import EditTournamentButton from './editTournamentButton';

class TournamentShow extends Component {
  componentDidMount() {
    this.props.fetchTournament(this.props.id);
  }

  render() {
    const { selectedTournament, currentUser } = this.props;

    if (!selectedTournament) {
      return (
        <div
          className="center brand-logo"
          style={{
            padding: "50px", fontSize: "24px"
          }}
        >
          Loading Tournament...
        </div>
      )
    }

    return (
      <div className="container">
        <h5 className="brand-logo">TournamentShow</h5>
        <EditTournamentButton tournament={selectedTournament} currentUser={currentUser} />
        <TournamentDetail tournament={selectedTournament}/>
        <ForumButton/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedTournament: state.tournaments.selectedTournament,
  id: ownProps.match.params.id,
  currentUser: state.auth
})

export default connect(
  mapStateToProps, { fetchTournament }
)(TournamentShow);
