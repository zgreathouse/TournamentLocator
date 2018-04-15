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
          <h3>{post.title}</h3>
        </div>
      </Link>
    )
  }
}

export default PostIndexItem;
