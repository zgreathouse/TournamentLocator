import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { deleteUser } from '../../actions/userActions';

//components
import UserDetail from './userDetail';
import EditProfileButton from './editProfileButton';

class ProfilePage extends Component {
  renderUsername(user) {
    return user.username ? <h2>{user.username}</h2> : <h2>New User!</h2>
  }

  onDelete() {
    if (window.confirm("Are you sure you would like to delete your account? After account deletion we will not be able to recover your account. Additionally, any tournaments you have created will be deleted.")) {
      this.props.deleteUser(() => {
        this.props.history.push(`/`);
      });
    }
  }

  renderDeleteButton() {
    return (
      <div className="delete-tournament-button-container">
        <button
          className="delete-tournament-button"
          onClick={this.onDelete.bind(this)}
        >Delete My Account</button>
      </div>
    )
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return (
        <div className="tournament-detail-container">
          <h3>Loading User Info...</h3>
        </div>
      )
    }

    return (
      <div className="tournament-detail-container">
        {this.renderUsername(user)}
        <EditProfileButton />
        <UserDetail user={user}/>
        {this.renderDeleteButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
});

export default connect(mapStateToProps, { deleteUser })(ProfilePage);
