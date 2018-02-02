import { combineReducers } from 'redux';

//reducers
import authReducer from './authReducer';
import tournamentsReducer from './tournamentsReducer';

export default combineReducers({
  auth: authReducer,
  tournaments: tournamentsReducer
});
