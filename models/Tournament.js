const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = require('./Post');

//Tournament Schema
const tournamentSchema = new Schema({
  title: String,
  game: String,
  tags: [String],
  tournamentOrganizer: { type: Schema.Types.ObjectId, ref: 'User'},
  streamLink: String,
  twitterLink: String,
  date: Date,
  startTime: Date,
  endTime: Date,
  venueAddress: String,
  venueFee: Number,
  entryFee: Number,
  potBonus: Number,
  maxEntrants: Number,
  bannerImage: String,
  series: Boolean,
  forum: [postSchema]
});

mongoose.model('tournaments', tournamentSchema);
