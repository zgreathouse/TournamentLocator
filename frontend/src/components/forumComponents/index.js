import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//actions
import { fetchPosts } from '../../actions/postActions';
import { fetchTournament } from '../../actions/tournamentActions';

//components
import ForumHeader from './forumHeader';
import NewPostButton from './posts/newPostButton';
import PostIndex from './posts/PostIndex';
import PostDetail from './posts/PostDetail';

class Forum extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id)
      .then(this.props.fetchTournament(this.props.match.params.id));
  }

  generatePostDetailText() {
    const { currentUser, tournament } = this.props;

    if (currentUser.finishAccountSetup) {
      return (
        <Link to={`/tournaments/${tournament._id}/forum/new`} className="new-post-link">
          Questions or comments <br/>
          Post it here!
        </Link>
      )
    }

    return (
      <Link to={`/user/edit`} className="new-post-link">
        Finish setting up your account <br/>
        to participate in the Forum!
      </Link>
    )
  }

  renderPostDetail() {
    const { selectedPost, tournament } = this.props;

    if (selectedPost && Object.keys(selectedPost).length > 0) {
      return (
        <PostDetail post={selectedPost} tournamentOrganizer={tournament._user}/>
      )
    }

    return (
      <div className="default-post-detail">
        {this.generatePostDetailText()}
      </div>
    )
  }

  render() {
    const { posts, currentUser } = this.props;

    if (!currentUser) {
      return <div></div>
    }

    return (
      <div className="forum-container">
        <ForumHeader route={`/tournaments/${this.props.match.params.id}`}/>
        <div className="tournaments-heading">
          <NewPostButton tournamentID={this.props.match.params.id} user={currentUser}/>
        </div>
        <div className="forum-content">
          <PostIndex posts={posts} currentUser={currentUser} />
          {this.renderPostDetail()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.entities,
  selectedPost: state.posts.selectedPost,
  tournament: state.tournaments.selectedTournament,
  currentUser: state.auth
});

export default connect(
  mapStateToProps, { fetchPosts, fetchTournament }
)(Forum);
