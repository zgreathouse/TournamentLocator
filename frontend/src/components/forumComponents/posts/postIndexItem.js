import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/postActions';

//components
import EditPostButton from './editPostButton';
import CommentsIndex from '../comments/CommentsIndex';

class PostIndexItem extends Component {
  renderEditButton() {
    const { post, currentUser } = this.props;

    if (post._user === currentUser._id) {
      return <EditPostButton post={post}/>
    }
  }

  renderDeleteButton() {
    const { post, currentUser } = this.props;

    if (post._user === currentUser._id) {
      return (
        <div className="delete-button-container">
          <button className="delete-button" onClick={this.onDelete.bind(this)}> X </button>
        </div>
      )
    }
  }

  onDelete() {
    this.props.deletePost(this.props.post._id);
  }

  render() {
    const { post, currentUser } = this.props;

    if (!currentUser) {
      return <div></div>
    }

    return (
      <div className="post-index-item">
        <div className="post-header">
          <h3>title: {post.title}</h3>
          <p>date: {post.datePosted}</p>
        </div>
        <div className="post-content">
          {this.renderDeleteButton()}
          <p>body: {post.body}</p>
          {this.renderEditButton()}
        </div>
        <CommentsIndex postID={post._id}/>
      </div>
    )
  }
}

export default connect(null, { deletePost })(PostIndexItem);
