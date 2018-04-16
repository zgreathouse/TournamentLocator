import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../../actions/postActions';

//components
import EditPostButton from './editPostButton';
import CommentIndex from '../comments/CommentIndex';

class PostDetail extends Component {
  renderEditButton() {
    const { post, currentUser } = this.props;

    if (post._user === currentUser._id) {
      return <EditPostButton post={post}/>
    }
  }

  renderDeleteButton() {
    const { post, currentUser } = this.props;
    console.log(post);

    if (post._user === currentUser._id) {
      return (
        <div className="delete-button-container">
          <button
            className="delete-button"
            onClick={this.onDelete.bind(this)}
          >X</button>
        </div>
      )
    }
  }

  onDelete() {
    this.props.deletePost(this.props.post._id);
  }

  render() {
    const { comments, post, currentUser } = this.props;

    if (!post) {
      return <div></div>
    }

    return (
      <div className="post-detail">
        <div className="post-nav">
          {this.renderDeleteButton()}
        </div>
        <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-body">
            <p>{post.body}</p>
            {this.renderEditButton()}
          </div>
        </div>
        <CommentIndex postID={post._id} comments={comments} currentUser={currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth,
  post: state.posts.selectedPost,
  comments: state.comments
});

export default connect(mapStateToProps,{ deletePost })(PostDetail);
