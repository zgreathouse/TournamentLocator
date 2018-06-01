import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { fetchTournament, deleteTournament } from '../../../actions/tournamentActions';

//components
import EditTournamentButton from './editTournamentButton';
import TournamentDetail from './tournamentDetail';
import ForumButton from './forumButton';

class TournamentShow extends Component {
  componentDidMount() {
    this.props.fetchTournament(this.props.id);
  }

  onDelete() {
    if (window.confirm("Are you sure you would like to delete this Tournament? Once the Tournament has been deleted it cannot be recovered.")) {
      this.props.deleteTournament(this.props.id, () => {
        this.props.history.push(`/tournaments`);
      });
    }
  }

  renderDeleteButton() {
    const { selectedTournament, currentUser } = this.props;

    if (currentUser._id === selectedTournament._user) {
      return (
        <div className="delete-tournament-button-container">
          <button
            className="delete-tournament-button"
            onClick={this.onDelete.bind(this)}
          >Delete Tournament</button>
        </div>
      )
    }
  }

  render() {
    const { selectedTournament, currentUser } = this.props;

    if (!selectedTournament || !currentUser) {
      return (
        <div style={{"minHeight": "700px", "padding": "30px"}}>
          <h3>Loading Tournament...</h3>
        </div>
      )
    }

    return (
      <div>
        <EditTournamentButton tournament={selectedTournament} currentUser={currentUser} />
        <TournamentDetail tournament={selectedTournament}/>
        {this.renderDeleteButton()}
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
