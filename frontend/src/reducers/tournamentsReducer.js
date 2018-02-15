import _ from 'lodash';

import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENT,
  CREATE_TOURNAMENT
} from '../actions/tournamentActions';

const initialState = {
  entities: {},
  selectedTournament: {}
};

const tournamentsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {

    case FETCH_TOURNAMENTS:
      const tournaments = action.payload.reverse();
      const tournamentsObject = {};

      for(let tournament of tournaments) {
        tournamentsObject[tournament._id] = tournament;
      }

      return _.merge({}, state, { entities: tournamentsObject });

    case FETCH_TOURNAMENT:
      newState = Object.assign({}, state);
      newState.selectedTournament = action.payload;

      return newState;

    default:
      return state;
  }
}

export default tournamentsReducer;
