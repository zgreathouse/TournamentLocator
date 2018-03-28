import _ from 'lodash';
import React, { Component } from 'react';

//components
import PostIndexItem from './postIndexItem';

class PostIndex extends Component {

  renderPosts() {
    return _.map(this.props.posts, (post => {
      return (
        <li key={post._id}>
          <PostIndexItem post={post} currentUser={this.props.currentUser} />
        </li>
      )
    }))
  }

  render() {
    if(!this.props.posts) {
      return (
        <div className="posts-index">
          <h3>Loading Posts...</h3>
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
