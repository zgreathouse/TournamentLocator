// import axios from 'axios';

//constants
export const FETCH_TOURNAMENTS  = 'FETCH_TOURNAMENTS';
// export const FETCH_TOURNAMENT   = 'FETCH_TOURNAMENT';
// export const CREATE_TOURNAMENT  = 'CREATE_TOURNAMENT';
// export const EDIT_TOURNAMENT    = 'EDIT_TOURNAMENT';
// export const DELETE_TOURNAMENT  = 'DELETE_TOURNAMENT';

//action which fetches all of the tournaments
export const fetchTournaments = () => dispatch => {
  const tournaments = [
    {
      _user: 1,
      title: "Smash of the Titans",
      game: ["Super Smash Bros for WiiU"],
      tags: ["Smash", "Smash 4", "Foundry", "Showdown"],
      description: "Do your best!"
    }, {
      _user: 4,
      title: "Versus",
      game: ["Super Smash Bros for WiiU"],
      tags: ["Smash", "Smash 4"],
      description: "Do your best!"
    }
  ];

  dispatch({
    type: FETCH_TOURNAMENTS,
    payload: tournaments }
  );
};
