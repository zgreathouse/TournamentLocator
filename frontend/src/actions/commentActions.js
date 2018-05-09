import axios from 'axios';

export const FETCH_COMMENT  = 'FETCH_COMMENT';
export const FETCH_COMMENTS  = 'FETCH_COMMENTS';
export const DELETE_COMMENT  = 'DELETE_COMMENT';

//acion which fetches all the comments for a given post
export const fetchComments = postID => async dispatch => {
  const res = await axios.get(`/api/comments/${postID}`);

  dispatch({
    type: FETCH_COMMENTS,
    payload: res.data
  });
}

//action which creates a new comment in the database
export const createComment = (postID, value) => async dispatch => {
  const res = await axios.post(`/api/comments/${postID}`, value);

  dispatch({
    type: FETCH_COMMENT,
    payload: res.data
  });
};

export const deleteComment = (postID, commentID) => async dispatch => {
  await axios.delete(`/api/${postID}/${commentID}`);

  dispatch({
    type: DELETE_COMMENT,
    payload: commentID
  });
}
