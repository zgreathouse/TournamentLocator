import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import React, { Component } from 'react';

//components
import NewCommentField from '../../formComponents/NewCommentField';
import CommentIndexItem from './commentIndexItem';

class CommentsIndex extends Component {
  renderComments() {
    const { comments, currentUser, postID } = this.props;

    if (!comments) {
      return <div>Loading Comments...</div>
    }

    return _.map(comments, comment => {
      return (
        <li key={uuidv4()}>
          <CommentIndexItem comment={comment} postID={postID} currentUser={currentUser} />
        </li>
      )
    })
  }

  renderCommentField() {
    const { postID, currentUser } = this.props;

    if (currentUser.finishAccountSetup) {
      return <NewCommentField postID={postID}/>
    }

  }

  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return <div></div>
    }

    if (Object.keys(this.props.comments).length === 0) {
      return (
        <div>
          {this.renderCommentField()}
          <div className="comments-index-empty">
            <p>No comments yet...</p>
          </div>
        </div>
      )
    }

    return (
      <div className="comments-section">
        {this.renderCommentField()}
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

export default CommentsIndex
