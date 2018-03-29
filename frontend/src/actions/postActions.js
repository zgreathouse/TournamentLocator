import axios from 'axios';

export const FETCH_POSTS  = 'FETCH_POSTS';
export const CREATE_POST  = 'CREATE_POST';
export const UPDATE_POST  = 'UPDATE_POST';
export const DELETE_POST  = 'DELETE_POST';

//action which fetches all of the posts for a specific tournament
export const fetchPosts = tournamentID => async dispatch => {
  const res = await axios.get(`/api/posts/${tournamentID}`);

  dispatch({
    type: FETCH_POSTS,
    payload: res.data
  });
};
