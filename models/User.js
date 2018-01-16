const mongoose = require('mongoose');
const { Schema } = mongoose;

const tournamentSchema = require('./Tournament');

//User Schema
const userSchema = new Schema({
  username: String,                               // the user's username
  city: String,                                   // city the user is based out of
  travelRange: { type: Number, default: 25 },     // travel radius specified by the user
  followedGames: [String],                        // an array of the games the user follows
  followedSeries: [String],                       // an array of different tournament series the user follows
  tournaments: [ tournamentSchema ]               // an array of tournaments created/run by the user
});

mongoose.model('users', userSchema);
