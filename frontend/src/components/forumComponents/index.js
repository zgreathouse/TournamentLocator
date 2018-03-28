import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

//components
import PostIndex from './posts/PostIndex';

class Forum extends Component {
  componentDidMount() {
    const { fetchPosts, selectedTournament } = this.props;
    fetchPosts(selectedTournament._id);
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
  currentUser: state.auth,
  selectedTournament: state.tournaments.selectedTournament
});

export default connect(
  mapStateToProps, { fetchPosts }
)(Forum);
