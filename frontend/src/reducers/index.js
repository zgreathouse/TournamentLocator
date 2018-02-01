import { combineReducers } from 'redux';

//reducers
import authReducer from './authReducer';
// import tournamentsReducers from './tournamentsReducer';

export default combineReducers({
  auth: authReducer
});
