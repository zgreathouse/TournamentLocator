import { FETCH_TOURNAMENTS } from '../actions/tournamentActions';

const tournaments = [
  {
    1: {
      _user: 1,
      title: "Smash of the Titans",
      game: ["Super Smash Bros for WiiU"],
      tags: ["Smash", "Smash 4", "Foundry", "Showdown"],
      description: "Do your best!",
      streamLink: "steam url",
      twitterLink: "twitter url",
      date: "2/1/2018",
      startTime: "7:00pm",
      endTime: "11:00am",
      venueAddress: "1425 Folsom St, San Francisco, CA 94103",
      venueFee: 5,
      entryFee: 5,
      sponsors: ["Showdown"],
      potBonus: 100,
      maxEntrants: 60,
      bannerImage: "image url",
      series: true,
      forum: "Insert Forum Here"
    }
  }, {
    2: {
      _user: 4,
      title: "Versus",
      game: ["Super Smash Bros for WiiU"],
      tags: ["Smash", "Smash 4"],
      description: "Do your best!",
      streamLink: "steam url",
      twitterLink: "twitter url",
      date: "2/1/2018",
      startTime: "7:00pm",
      endTime: "11:00am",
      venueAddress: "venue address",
      venueFee: 5,
      entryFee: 5,
      sponsors: [],
      potBonus: 100,
      maxEntrants: 60,
      bannerImage: "image url",
      series: true,
      forum: "Insert Forum Here"
    }
  }
]

const tournamentsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_TOURNAMENTS:
      return tournaments;
    default:
      return state;
  }
}

export default tournamentsReducer;
