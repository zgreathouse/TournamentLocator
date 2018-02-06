import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTournament } from '../../../actions/tournamentActions';

//components
import TournamentDetail from './TournamentDetail';
import ForumButton from './forumButton';

class TournamentShow extends Component {
  componentDidMount() {
    this.props.fetchTournament(this.props.id);
  }

  render() {
    const { selectedTournament } = this.props;

    return (
      <div className="container">
        <h5 className="brand-logo">TournamentShow</h5>
        <TournamentDetail tournament={selectedTournament}/>
        <ForumButton/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedTournament: state.tournaments.selectedTournament,
  id: ownProps.match.params.id
})

export default connect(mapStateToProps, { fetchTournament })(TournamentShow);
