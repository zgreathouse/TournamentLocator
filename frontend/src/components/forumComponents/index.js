/*
TODO
  we access the Tournament ID by accessing the ID of the selecte
  tournament. selectedTournament data is not persisting on refresh.
  So the selected tournament and posts are reset to nothing when
  refreshing the forum.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import { fetchTournament } from '../../actions/tournamentActions';

//components
import PostIndex from './posts/PostIndex';

class Forum extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts(this.props.match.params.id);
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
