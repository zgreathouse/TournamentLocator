import React from 'react';

const CommentIndexItem = ({comment, currentUser}) => {
  return (
    <div>
      {comment.body}
    </div>
  )
}

export default CommentIndexItem;
