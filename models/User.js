const mongoose = require('mongoose');
const { Schema } = mongoose;

const tournamentSchema = require('./Tournament');

//User Schema
const userSchema = new Schema({
  username: String,                                                     // the user's username
  googleID: String,                                                     // google ID saved for google OAuth
  facebookID: String,                                                   // facebook ID saved for google OAuth
  title: String,                                                        // the user's title
  city: String,                                                         // city the user is based out of
  travelRange: { type: Number, default: 25 },                           // travel radius specified by the user
  followedGames: [String],                                              // an array of the games the user follows
  followedSeries: [String],                                             // an array of different tournament series the user follows
  finishAccountSetup: { type: Boolean, default: false },                 // boolean for whether or not the user has finished setting up their account
  tournaments: [ tournamentSchema ]                                     // an array of tournaments created/run by the user
});


mongoose.model('users', userSchema);
