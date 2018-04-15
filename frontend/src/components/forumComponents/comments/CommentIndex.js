import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import React, { Component } from 'react';

//components
import NewCommentField from '../../formComponents/NewCommentField';
import CommentIndexItem from './commentIndexItem';

class CommentsIndex extends Component {
  renderComments() {
    const { comments, currentUser } = this.props;

    if (!comments || comments.length === 0) {
      return <div>No Comments...</div>
    }

    return _.map(comments, comment => {
      return (
        <li key={uuidv4()}>
          <CommentIndexItem comment={comment} currentUser={currentUser} />
        </li>
      )
    })
  }

  render() {
    const { postID } = this.props;
    
    if (Object.keys(this.props.comments).length === 0) {
      return (
        <div className="comments-index">
          <NewCommentField postID={postID}/>
          <p className="comments-index-empty">No comments yet...</p>
        </div>
      )
    }


    return (
      <div className="comments-section">
        <NewCommentField postID={postID}/>
        <ul className="comments">
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

export default CommentsIndex
