const mongoose = require('mongoose');
const { Schema } = mongoose;

const tournamentSchema = require('./Tournament');

//User Schema
const userSchema = new Schema({
  username: String,
  city: String,
  travelRange: { type: Number, default: 25 },
  followedGames: [String],
  followedSeries: [String],
  tournaments: [ tournamentSchema ]
});

mongoose.model('users', userSchema);
