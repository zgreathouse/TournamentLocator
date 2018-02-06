import axios from 'axios';

//constants
export const FETCH_USER = 'FETCH_USER';

//action fetches the current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};