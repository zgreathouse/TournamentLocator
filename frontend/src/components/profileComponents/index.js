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
      <div>
        <h2>{user.username}</h2>
        <Link to="/user/edit">Edit Profile</Link>
        <p>City: {user.city}</p>
        <p>Travel Radius: {user.travelRange} miles</p>
        <p>Games: {user.followedGames}</p>
        <p>Favorite Tournaments: {user.followedSeries}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps)(ProfilePage);
