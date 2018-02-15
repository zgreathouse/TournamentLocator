import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournament } from '../../../actions/tournamentActions';

//components
import TournamentBanner from './tournamentBanner';
import EditTournamentButton from './editTournamentButton';
import TournamentDetail from './tournamentDetail';
import ForumButton from './forumButton';

class TournamentShow extends Component {
  componentDidMount() {
    this.props.fetchTournament(this.props.id);
  }

  render() {
    const { selectedTournament, currentUser } = this.props;

    if (!selectedTournament) {
      return (
        <div className="center brand-logo" style={{
            padding: "50px", fontSize: "24px"
        }}>
          Loading Tournament...
        </div>
      )
    }

    return (
      <div className="container">
        <TournamentBanner tournament={selectedTournament} />
        <EditTournamentButton tournament={selectedTournament} currentUser={currentUser} />
        <TournamentDetail tournament={selectedTournament}/>
        <ForumButton/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  selectedTournament: state.tournaments.selectedTournament,
  currentUser: state.auth
})

export default connect(
  mapStateToProps, { fetchTournament }
)(TournamentShow);