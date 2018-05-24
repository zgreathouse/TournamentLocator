import axios from 'axios';
import { convertToDatabaseWritable } from '../util/helperFunctions';

//action types
export const FETCH_TOURNAMENTS       = 'FETCH_TOURNAMENTS';
export const FETCH_USER_TOURNAMENTS  = 'FETCH_USER_TOURNAMENTS';
export const FETCH_TOURNAMENT        = 'FETCH_TOURNAMENT';
export const CREATE_TOURNAMENT       = 'CREATE_TOURNAMENT';
export const UPDATE_TOURNAMENT       = 'UPDATE_TOURNAMENT';
export const DELETE_TOURNAMENT       = 'DELETE_TOURNAMENT';

let newTournament;

//action which fetches a single tournament from the database
export const fetchTournament = id => async dispatch => {
  const res = await axios.get(`/api/tournaments/${id}`);

  dispatch({
    type: FETCH_TOURNAMENT,
    payload: res.data
  });
};

//action which fetches all of the tournaments from the database
export const fetchTournaments = () => async dispatch => {
  const res = await axios.get('/api/tournaments');

  dispatch({
    type: FETCH_TOURNAMENTS,
    payload: res.data
  });
};

//action which fetches all of the tournaments from the database
export const fetchUserTournaments = (id) => async dispatch => {
  const res = await axios.get(`/api/${id}/tournaments`);

  dispatch({
    type: FETCH_TOURNAMENTS,
    payload: res.data
  });
};



//action which creates a new tournament document in the database
export const createTournament = (values, callback) => async dispatch => {
  newTournament = convertToDatabaseWritable(values);
  const res = await axios.post('/api/tournaments', newTournament);
  await callback();

  dispatch({
    type: CREATE_TOURNAMENT,
    payload: res.data
  });
}

//action which edits an existing tournament in the database
export const editTournament = (id, values, callback) => async dispatch => {
  newTournament = convertToDatabaseWritable(values);

  const res = await axios.patch(`/api/tournaments/${id}`, newTournament);
  await callback();

  dispatch({
    type: UPDATE_TOURNAMENT,
    payload: res.data
  });
}

//action which deletes a specific tournament document in the database
export const deleteTournament = (id, callback) => async dispatch => {
  await axios.delete(`/api/tournaments/${id}`)
  await callback();

  dispatch({
    type: DELETE_TOURNAMENT,
    payload: id
  });
}
