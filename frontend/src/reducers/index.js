import { combineReducers } from 'redux';

//reducers
import authReducer from './authReducer';
import tournamentsReducer from './tournamentsReducer';
import postsReducer from './postsReducer';
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  tournaments: tournamentsReducer,
  posts: postsReducer,
  form: FormReducer
});
