import _ from 'lodash';
import React, { Component } from 'react';

//components
import PostIndexItem from './postIndexItem';

class PostIndex extends Component {
  renderPosts() {
    const { currentUser } = this.props;
    return _.map(this.props.posts, post => {
      return (
        <li key={post._id}>
          <PostIndexItem post={post} currentUser={currentUser} />
        </li>
      )
    })
  }

  render() {
    if(!this.props.posts) {
      return (
        <div className="posts-index">
          <h3>No posts yet...</h3>
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

export default PostIndex;