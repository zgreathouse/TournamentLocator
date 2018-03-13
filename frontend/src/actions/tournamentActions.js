import axios from 'axios';
import { convertToDatabaseWritable } from '../util/helperFunctions';

//constants
export const FETCH_TOURNAMENTS  = 'FETCH_TOURNAMENTS';
export const FETCH_TOURNAMENT   = 'FETCH_TOURNAMENT';
export const UPDATE_TOURNAMENT = 'UPDATE_TOURNAMENT';
export const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT';

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

//action which creates a new tournament document in the database
export const createTournament = (values, callback) => async dispatch => {
  const newTournament = convertToDatabaseWritable(values);
  const res = await axios.post('/api/tournaments', newTournament);
  await callback();

  dispatch({
    type: FETCH_TOURNAMENT,
    payload: res.data
  })
}

//action which deletes a specific tournament document in the database
export const deleteTournament = (id, callback) => async dispatch => {
  await axios.delete(`/api/tournament/${id}`)
  await callback();

  dispatch({
    type: DELETE_TOURNAMENT,
    payload: id
  })
}
