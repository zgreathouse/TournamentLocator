import { combineReducers } from 'redux';

//reducers
import authReducer from './authReducer';
import tournamentsReducer from './tournamentsReducer';
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  tournaments: tournamentsReducer,
  form: FormReducer
});
