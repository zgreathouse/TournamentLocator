import { FETCH_TOURNAMENTS, FETCH_TOURNAMENT } from '../actions/tournamentActions';

const defaultState = [
  {
    id: 12,
    _user: 1,
    title: "Smash of the Titans",
    game: ["Super Smash Bros for WiiU"],
    date: "2/1/18",
    description: "San Francisco weekly tournament!"
  }, {
    id: 2,
    _user: 4,
    title: "Versus",
    game: ["Super Smash Bros for WiiU"],
    date: "2/5/18",
    description: "Weekly Tournament"
  },
  {
    id: 6,
    _user: 3,
    title: "Capcom Cup",
    game: ["Street Fighter V"],
    date: "3/25/18",
    description: "World Street Fighter Tournament"
  },
  {
    id: 1,
    _user: 9,
    title: "Genesis 5",
    game: ["Super Smash Bros Melee"],
    date: "1/24/18",
    description: "World Smash Tournament"
  }
];

const tournamentsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_TOURNAMENTS:
      return state;
    case FETCH_TOURNAMENT:
      let tournament = defaultState.filter(tournament => tournament.id === action.payload);
      return tournament;
    default:
      return state;
  }
}

export default tournamentsReducer;
