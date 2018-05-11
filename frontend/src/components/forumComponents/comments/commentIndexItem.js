import React, { Component } from 'react';
import { connect } from 'react-redux';
import { extractDate } from '../../../util/helperFunctions';

//actions
import { deleteComment } from '../../../actions/commentActions';

class CommentIndexItem extends Component {
  renderDeleteButton() {
    const { comment, currentUser, tournamentOrganizer } = this.props;

    if (currentUser._id === comment._user || currentUser._id === tournamentOrganizer) {
      return (
        <div className="delete-button-container">
          <button className="delete-button" onClick={this.onDelete.bind(this)}>
            X
          </button>
        </div>
      )
    }
  }

  onDelete() {
    this.props.deleteComment(this.props.postID, this.props.comment._id);
  }

  render() {
    const { comment } = this.props;

    return (
      <div className="comment-index-item">
        <div className="comment-header">
          {this.renderDeleteButton()}
        </div>
        <p className="comment-body">
          <strong>{comment.author}:</strong>  {comment.body}
        </p>
        <p className="comment-date">
          {extractDate(comment.dateSubmitted)}
        </p>
      </div>
    )
  }
}

export default connect(null, { deleteComment })(CommentIndexItem);
