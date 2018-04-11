import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostIndexItem extends Component {
  render() {
    const { post, currentUser } = this.props;

    if (!currentUser) {
      return <div></div>
    }

    return (
      <Link to={`/tournaments/${post._tournament}/forum/${post._id}`}>
        <div className="post-index-item">
          <div className="post-header">
            <h3>title: {post.title}</h3>
            <p>date: {post.datePosted}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default PostIndexItem;
