import axios from 'axios';

export const FETCH_COMMENTS  = 'FETCH_COMMENTS';
export const CREATE_COMMENT  = 'CREATE_COMMENT';
export const DELETE_COMMENT  = 'DELETE_COMMENT';

export const createComment = (postID, value) => async dispatch => {
  console.log(value);
  const res = await axios.post(`/api/comments/${postID}`, value);

  dispatch({
    type: CREATE_COMMENT,
    payload: res.data
  });
}
