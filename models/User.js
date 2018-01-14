const mongoose = require('mongoose');
const { Schema } = mongoose;

//User Schema
const userSchema = new Schema({
  username: String,
  city: String,
  travelRange: { type: Number, default: 25 },
  tournaments: [ tournamentSchema ]
});

mongoose.model('users', userSchema);
