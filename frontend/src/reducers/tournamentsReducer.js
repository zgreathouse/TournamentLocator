import _ from 'lodash';
import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENT,
  DELETE_TOURNAMENT
} from '../actions/tournamentActions';

const initialState = {
  entities: {},
  selectedTournament: {}
};

const tournamentsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {

    case FETCH_TOURNAMENT:
      newState = Object.assign({}, state);
      newState.selectedTournament = action.payload;
      return newState;

    case FETCH_TOURNAMENTS:
      const tournaments = action.payload;
      const tournamentsObject = {};
      newState = Object.assign({}, state);

      for(let tournament of tournaments) {
        tournamentsObject[tournament._id] = tournament;
      }

      newState.entities = tournamentsObject;
      return newState;

    case DELETE_TOURNAMENT:
      return _.omit(state.entities, action.payload);

    default:
      return state;
  }
}

export default tournamentsReducer;
