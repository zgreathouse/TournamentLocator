import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../../actions/postActions';
import { Link } from 'react-router-dom';

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
          <button className="delete-button" onClick={this.onDelete.bind(this)}>
            X
          </button>
        </div>
      )
    }
  }

  onDelete() {
    this.props.deletePost(this.props.post._id, () => {
      this.props.history.push(`/tournaments/${this.props.match.params.id}/forum`);
    });
  }

  render() {
    const { post, currentUser } = this.props;

    if (!post || !currentUser) {
      return <div></div>
    }

    return (
      <div className="post-detail">
        <div className="post-nav">
          <Link
            className="go-back-button"
            to={`/tournaments/${this.props.match.params.id}/forum`}
          >Go Back</Link>
          {this.renderDeleteButton()}
        </div>
        <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-body">
            <p>{post.body}</p>
            {this.renderEditButton()}
          </div>
        </div>
        <CommentsIndex postID={post._id} comments={post.comments}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth,
  post: state.posts
});

export default connect(mapStateToProps, { deletePost, fetchPost })(PostDetail);
