import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import { fetchTournament } from '../../actions/tournamentActions';
import { Link } from 'react-router-dom';

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
    const { selectedPost, tournament } = this.props;


    if (selectedPost && Object.keys(selectedPost).length > 0) {
      return (
        <PostDetail post={this.props.selectedPost}/>
      )
    }

    return (
      <div className="default-post-detail">
        <Link
          to={`/tournaments/${tournament._id}/forum/new`}
          className="new-post-link"
        >
          Questions or comments <br/>
          Post it here!
        </Link>
      </div>
    )
  }

  render() {
    const { posts, currentUser } = this.props;

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

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.entities,
  selectedPost: state.posts.selectedPost,
  tournament: state.tournaments.selectedTournament
});

export default connect(
  mapStateToProps, { fetchPosts, fetchTournament }
)(Forum);
