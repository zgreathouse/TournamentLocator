import React from 'react';

//components
import NewCommentField from '../../formComponents/NewCommentField';

const CommentsIndex = ({ postID }) => {
  return (
    <div className="comments-section">
      <NewCommentField postID={postID}/>
    </div>
  )
}

export default CommentsIndex
