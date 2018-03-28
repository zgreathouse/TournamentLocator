import React, { Component } from 'react';

//components
import PostIndex from './posts/PostIndex';

class Forum extends Component {
  render() {
    return (
      <div className="forum-container">
        <h2>Forum</h2>
        <PostIndex/>
      </div>
    )
  }
}

export default Forum;
