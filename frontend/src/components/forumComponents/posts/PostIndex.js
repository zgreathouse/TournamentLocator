import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/postActions';

//components
import PostIndexItem from './postIndexItem';

class PostIndex extends Component {
  componentDidMount() {
    const { fetchPosts, selectedTournament } = this.props;
    fetchPosts(selectedTournament._id);
  }

  renderPosts() {
    return _.map(this.props.posts, (post => {
      return (
        <li key={post._id}>
          <PostIndexItem post={post} />
        </li>
      )
    }))
  }

  render() {
    if(this.props.posts.length === 0) {
      return (
        <div className="posts-index">
          <h3>There are no posts yet...</h3>
        </div>
      )
    }

    return (
      <div className="posts-index">
        <h3>Posts</h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  selectedTournament: state.tournaments.selectedTournament
});

export default connect(
  mapStateToProps, { fetchPosts }
)(PostIndex);
