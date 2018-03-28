import React from 'react'

const PostIndexItem = ({post}) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>{post.datePosted}</p>
    </div>
  )
}

export default PostIndexItem;
