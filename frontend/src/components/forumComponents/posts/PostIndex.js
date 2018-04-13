import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import React, { Component } from 'react';

//components
import PostIndexItem from './postIndexItem';

class PostIndex extends Component {
  renderPosts() {
    const { currentUser } = this.props;
    return _.map(this.props.posts, post => {
      return (
        <li key={uuidv4()}>
          <PostIndexItem post={post} currentUser={currentUser} />
        </li>
      )
    })
  }

  render() {
    if (Object.keys(this.props.posts).length === 0) {
      return (
        <div className="posts-index">
          <h3 className="posts-index-empty">No posts yet...</h3>
        </div>
      )
    }

    return (
      <div className="posts-index">
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

export default PostIndex;
