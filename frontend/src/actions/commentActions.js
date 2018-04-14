import axios from 'axios';

export const FETCH_POST      = 'FETCH_POST';
export const FETCH_COMMENTS  = 'FETCH_COMMENTS';
export const DELETE_COMMENT  = 'DELETE_COMMENT';

export const createComment = (postID, value) => async dispatch => {
  const res = await axios.post(`/api/comments/${postID}`, value);

  dispatch({
    type: FETCH_POST,
    payload: res.data
  });
};
