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

//action which creates a new post for a specific tournament
export const createPost = (tournamentID, values, callback) => async dispatch => {
  //logic for setting the _tournament field to be the tournamentID
  const newPost = Object.assign({}, values, {_tournament: tournamentID});
  console.log(newPost);

  const res = await axios.post(`api/posts/${tournamentID}`, newPost);
  await callback();

  dispatch({
    type: CREATE_POST,
    payload: res.data
  });
};
