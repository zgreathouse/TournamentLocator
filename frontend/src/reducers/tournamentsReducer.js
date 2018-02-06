import { FETCH_TOURNAMENTS, FETCH_TOURNAMENT } from '../actions/tournamentActions';

const defaultState = {
  entities: {
    12: {
      id: 12,
      _user: 1,
      title: "Smash of the Titans",
      game: ["Super Smash Bros for WiiU"],
      date: "2/1/18",
      description: "San Francisco weekly tournament!"
    },
    2: {
      id: 2,
      _user: 4,
      title: "Versus",
      game: ["Super Smash Bros for WiiU"],
      date: "2/5/18",
      description: "Weekly Tournament"
    },
    6: {
      id: 6,
      _user: 3,
      title: "Capcom Cup",
      game: ["Street Fighter V"],
      date: "3/25/18",
      description: "World Street Fighter Tournament"
    },
    1: {
      id: 1,
      _user: 9,
      title: "Genesis 5",
      game: ["Super Smash Bros Melee"],
      date: "1/24/18",
      description: "World Smash Tournament"
    }
  },
  selectedTournament: {}
};

const tournamentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case FETCH_TOURNAMENTS:
      return state;

    case FETCH_TOURNAMENT:
      newState = Object.assign({}, state);
      let tournament = newState.entities[action.payload];
      newState.selectedTournament = tournament;
      return newState;

    default:
      return state;
  }
}

export default tournamentsReducer;
