import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import { fetchPost } from '../../../actions/postActions';
import { fetchComments } from '../../../actions/commentActions';

class PostIndex extends Component {
  fetchPostAndComments(postID) {
    this.props.fetchPost(postID)
      .then(this.props.fetchComments(postID));
  }

  renderPosts() {
    const { posts } = this.props;

    return _.map(posts, post => {
      return (
        <li key={uuidv4()} onClick={() => this.fetchPostAndComments(post._id)}>
          <div className="post-index-item">
            <h3>{post.title}</h3>
          </div>
        </li>
      )
    })
  }

  render() {
    if (Object.keys(this.props.posts).length === 0) {
      return (
        <div className="posts-index-container">
          <h3 className="posts-index-empty">No posts yet...</h3>
        </div>
      )
    }

    return (
      <div className="posts-index-container">
        <ul className="posts-index">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

export default connect(null, { fetchPost, fetchComments })(PostIndex);
