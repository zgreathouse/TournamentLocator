import axios from 'axios';

//constants
export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

//action which fetches the current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//action which updates the current user
export const editUser = () => async dispatch => {
  const res = await axios.patch('/api/current_user');

  dispatch({
    type: UPDATE_USER,
    payload: res.data
  });
};

//action which deletes the user in the database
export const deleteUser = () => async dispatch => {
  const res = await axios.delete('/api/current_user');

  dispatch({
    type: DELETE_USER,
    payload: res.data
  });
};
