import React from 'react'

const PostIndexItem = ({post}) => {
  // logic for determining if the author of the post is the current user
  // if it is, allow them to delete or edit the post
    // if(post._user === currentUser) {}

  return (
    <div>
      <h3>title: {post.title}</h3>
      <p>body: {post.body}</p>
      <p>date: {post.datePosted}</p>
    </div>
  )
}

export default PostIndexItem;
