import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps)(ProfilePage);
