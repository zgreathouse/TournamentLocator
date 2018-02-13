import axios from 'axios';

//constants
export const FETCH_TOURNAMENTS  = 'FETCH_TOURNAMENTS';
export const FETCH_TOURNAMENT   = 'FETCH_TOURNAMENT';

//action which fetches all of the tournaments from the database
export const fetchTournaments = () => async dispatch => {
  const res = await axios.get('/api/tournaments');

  dispatch({
    type: FETCH_TOURNAMENTS,
    payload: res.data
  });
};

//action which fetches a single tournament from the database
export const fetchTournament = id => async dispatch => {
  const res = await axios.get(`/api/tournaments/${id}`);

  dispatch({
    type: FETCH_TOURNAMENT,
    payload: res.data
  });
};
