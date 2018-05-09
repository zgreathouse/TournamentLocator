import axios from 'axios';
import { convertToDatabaseWritable } from '../util/helperFunctions';

//constants
export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

//action which fetches the current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentUser');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//action which updates the current user
export const editUser = (values, callback) => async dispatch => {
  const newUser = convertToDatabaseWritable(values);
  const res = await axios.patch('/api/currentUser', newUser);
  await callback();

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//action which deletes the user in the database
export const deleteUser = callback => async dispatch => {
  const res = await axios.delete('/api/currentUser');
  await callback();

  dispatch({
    type: DELETE_USER,
    payload: res.data
  });
};
