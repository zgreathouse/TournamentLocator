import axios from 'axios';

//constants
export const FETCH_TOURNAMENTS  = 'FETCH_TOURNAMENTS';
export const FETCH_TOURNAMENT   = 'FETCH_TOURNAMENT';
export const CREATE_TOURNAMENT  = 'CREATE_TOURNAMENT';
export const EDIT_TOURNAMENT    = 'EDIT_TOURNAMENT';
export const DELETE_TOURNAMENT  = 'DELETE_TOURNAMENT';

//action which fetches all of the tournaments
export const fetchTournments = () => async dispatch => {
  // const res = await axios.get('/api/tournaments');
  dispatch({ type: FETCH_TOURNAMENTS, payload: res.data });
}
