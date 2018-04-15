import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import { fetchTournament } from '../../actions/tournamentActions';

//components
import ForumHeader from './forumHeader';
import NewPostButton from './posts/newPostButton';
import PostIndex from './posts/PostIndex';
import PostDetail from './posts/PostDetail';

class Forum extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
    this.props.fetchTournament(this.props.match.params.id)
  }

  renderPostDetail() {
    if (this.props.match.params.postID) {
      return <PostDetail postID={this.props.match.params.postID}/>
    }

    return (
      <div>
        Any questions or comments regarding the tournament? Post it here!
      </div>
    )
  }

  render() {
    const { tournament, posts, currentUser } = this.props;

    if (!tournament) {
      return <div></div>
    }

    return (
      <div className="forum-container">
        <ForumHeader route={`/tournaments/${this.props.match.params.id}`}/>
        <div className="tournaments-heading">
          <NewPostButton tournamentID={this.props.match.params.id}/>
        </div>
        <div className="forum-content">
          <PostIndex posts={posts} currentUser={currentUser} />
          {this.renderPostDetail()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.entities,
  currentUser: state.auth,
  tournament: state.tournaments.selectedTournament
});

export default connect(
  mapStateToProps, { fetchPosts, fetchTournament }
)(Forum);
