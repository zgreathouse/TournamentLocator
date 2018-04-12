import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../../actions/postActions';

//components
import EditPostButton from './editPostButton';
import CommentsIndex from '../comments/CommentsIndex';

class PostDetail extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  renderEditButton() {
    const { post, currentUser } = this.props;

    if (post._user === currentUser._id) {
      return <EditPostButton post={post}/>
    }
  }

  renderDeleteButton() {
    const { post, currentUser } = this.props;

    if (post._user === currentUser._id) {
      return (
        <div className="delete-button-container">
          <button className="delete-button" onClick={this.onDelete.bind(this)}> X </button>
        </div>
      )
    }
  }

  onDelete() {
    this.props.deletePost(this.props.post._id);
  }

  render() {
    const { post, currentUser } = this.props;

    if (!post || !currentUser) {
      return <div></div>
    }

    return (
      <div>
        <div className="post-content">
          {this.renderDeleteButton()}
          <p>body: {post.body}</p>
          {this.renderEditButton()}
        </div>
        <CommentsIndex postID={post._id}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth,
  post: state.posts
});

export default connect(mapStateToProps, { deletePost, fetchPost })(PostDetail);
