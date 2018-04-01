import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import { fetchTournament } from '../../actions/tournamentActions';

//components
import PostIndex from './posts/PostIndex';

class Forum extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
  }

  render() {
    const { posts, currentUser } = this.props;

    return (
      <div className="forum-container">
        <h2>Forum</h2>
        <PostIndex posts={posts} currentUser={currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.auth
});

export default connect(
  mapStateToProps, { fetchPosts, fetchTournament }
)(Forum);
