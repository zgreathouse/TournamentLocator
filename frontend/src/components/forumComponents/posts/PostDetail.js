import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderBody } from '../../../util/helperFunctions';

//actions
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

  onDelete() {
    if (window.confirm("Are you sure you would like to delete this post?")) {
      this.props.deletePost(this.props.post._id);
    }
  }

  renderDeleteButton() {
    const { post, currentUser, author } = this.props;

    if (post._user === currentUser._id || author === currentUser._id) {
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

  render() {
    const { comments, post, currentUser, tournamentAuthor } = this.props;

    if (!post) {
      return <div>Loading Post...</div>
    }

    return (
      <div className="post-detail">
        <div className="post-nav">
          {this.renderDeleteButton()}
        </div>
        <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <div className="post-body">
            <div className="body-text">
              {renderBody(post.body)}
            </div>
            {this.renderEditButton()}
          </div>
        </div>
        <CommentIndex
          postID={post._id}
          comments={comments}
          author={tournamentAuthor}
          currentUser={currentUser}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth,
  tournamentAuthor: state.tournaments.selectedTournament._user,
  post: state.posts.selectedPost,
  comments: state.comments
});

export default connect(
  mapStateToProps, { deletePost }
)(PostDetail);
