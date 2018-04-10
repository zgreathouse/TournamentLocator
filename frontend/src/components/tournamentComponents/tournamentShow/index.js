import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournament, deleteTournament } from '../../../actions/tournamentActions';

//components
// import TournamentBanner from './tournamentBanner';
import EditTournamentButton from './editTournamentButton';
import TournamentDetail from './tournamentDetail';
import ForumButton from './forumButton';

class TournamentShow extends Component {
  componentDidMount() {
    this.props.fetchTournament(this.props.id);
  }


  onDelete() {
    this.props.deleteTournament(this.props.id, () => {
      this.props.history.push(`/tournaments`);
    });
  }

  render() {
    const { selectedTournament, currentUser } = this.props;

    if (!selectedTournament) {
      return (
        <div>
          Loading Tournament...
        </div>
      )
    }

    return (
      <div>
        {/* <TournamentBanner tournament={selectedTournament} /> */}
        <EditTournamentButton tournament={selectedTournament} currentUser={currentUser} />
        <TournamentDetail tournament={selectedTournament}/>
        <div className="delete-tournament-button-container">
          <button
            className="delete-tournament-button"
            onClick={this.onDelete.bind(this)}
          >Delete Tournament</button>
        </div>
          <ForumButton tournamentID={selectedTournament._id}/>
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
  mapStateToProps, { fetchTournament, deleteTournament }
)(TournamentShow);
