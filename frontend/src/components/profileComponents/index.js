import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../actions/userActions';

class ProfilePage extends Component {
  onDelete() {
    this.props.deleteTournament(this.props.id, () => {
      this.props.history.push(`/tournaments`);
    });
  }

  renderDeleteButton() {
    const { user } = this.props;

    if (user) {
      return (
        <div className="delete-tournament-button-container">
          <button
            className="delete-tournament-button"
            onClick={this.onDelete.bind(this)}
          >Delete My Account</button>
        </div>
      )
    }
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return <div>Loading User Info...</div>
    }

    return (
      <div className="tournament-detail-container">
        <h2>{user.username}</h2>
        <div className="edit-button-container">
          <Link
            to="/user/edit"
            className="edit-button"
          >Edit Profile</Link>
        </div>
        <div>City: {user.city}</div>
        <div>Travel Radius: {user.travelRange} miles</div>
        <div>Games: {user.followedGames}</div>
        <div>Favorite Tournaments: {user.followedSeries}</div>
        {this.renderDeleteButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(
  mapStateToProps, { deleteUser }
)(ProfilePage);
