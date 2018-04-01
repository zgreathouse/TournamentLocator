import React, { Component } from 'react'

//components
import EditPostButton from './editPostButton';

class PostIndexItem extends Component {
  // logic for determining if the author of the post is the current user
  // if it is, allow them to delete or edit the post

  renderEditButton() {
    const { post, currentUser } = this.props;

    if (post._user === currentUser._id) {
      return <EditPostButton post={post}/>
    }
  }

  render() {
    const { post, currentUser } = this.props;

    if (!currentUser) {
      return <div></div>
    }

    return (
      <div className="post-index-item">
        <h3>title: {post.title}</h3>
        <div className="post-content">
          <p>body: {post.body}</p>
          <p>date: {post.datePosted}</p>
          {this.renderEditButton()}
        </div>
      </div>
    )
  }
}

export default PostIndexItem;
