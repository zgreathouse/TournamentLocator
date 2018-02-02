import { FETCH_TOURNAMENTS } from '../actions/tournamentActions';

const tournamentsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_TOURNAMENTS:
      return action.payload;
    default:
      return state;
  }
}

export default tournamentsReducer;
