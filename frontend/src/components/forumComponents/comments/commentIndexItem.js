import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/commentActions';

class CommentIndexItem extends Component {
  renderDeleteButton() {
    const { comment, currentUser } = this.props;

    if (comment._user === currentUser._id) {
      return (
        <div className="delete-button-container">
          <button className="delete-button white" onClick={this.onDelete.bind(this)}>
            X
          </button>
        </div>
      )
    }
  }

  onDelete() {
    this.props.deleteComment(this.props.comment._id);
  }

  render() {
    const { comment, currentUser } = this.props;
    return (
      <div className="comment-index-item">
        <div className="comment-header">
          {currentUser.username}
          {this.renderDeleteButton()}
        </div>
        <p className="comment-body">{comment.body}</p>
      </div>
    )
  }
}

export default connect(null, { deleteComment })(CommentIndexItem);
