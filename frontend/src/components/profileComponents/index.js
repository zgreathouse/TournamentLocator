import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../actions/userActions';
import { convertToReadable } from '../../util/helperFunctions';

class ProfilePage extends Component {
  renderUsername(user) {
    if (user.username) {
      return <h2>{user.username}</h2>
    }

    return <h2>New User!</h2>
  }

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
        {this.renderUsername(user)}
        <div className="edit-button-container">
          <Link
            to="/user/edit"
            className="edit-button"
          >Edit Profile</Link>
        </div>
        <div>City: {user.city}</div>
        <div>Travel Radius: {user.travelRange} miles</div>
        <div>Games: {convertToReadable(user.followedGames)}</div>
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
