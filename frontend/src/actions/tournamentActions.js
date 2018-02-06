import axios from 'axios';

//constants
export const FETCH_TOURNAMENTS  = 'FETCH_TOURNAMENTS';
export const FETCH_TOURNAMENT   = 'FETCH_TOURNAMENT';
// export const CREATE_TOURNAMENT  = 'CREATE_TOURNAMENT';
// export const EDIT_TOURNAMENT    = 'EDIT_TOURNAMENT';
// export const DELETE_TOURNAMENT  = 'DELETE_TOURNAMENT';

//action which fetches all of the tournaments
export const fetchTournaments = () => async dispatch => {
  const res = await axios.get('/api/tournaments');

  dispatch({
    type: FETCH_TOURNAMENTS,
    payload: res.data
  });
};

//action which fetches a single tournament
export const fetchTournament = id => async dispatch => {
  const res = await axios.get(`/api/tournaments/${id}`);

  dispatch({
    type: FETCH_TOURNAMENT,
    payload: res.data
  });
};

// export const createTournament = tournament => dispatch => {
//
//   dispatch({
//     type: CREATE_TOURNAMENT
//   })
// }
//
// export const editTournament = tournament => dispatch => {
//
//   dispatch({
//     type: EDIT_TOURNAMENT
//   })
// }
//
// export const deleteTournament = tournament => dispatch => {
//
//   dispatch({
//     type: DELETE_TOURNAMENT
//   })
// }
