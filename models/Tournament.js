const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = require('./Post');

//Tournament Schema
const tournamentSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },                  // id of user who created the tournament
  title: String,                                                        // title of the tournament
  game: [String],                                                       // featured game(s)
  tags: [String],                                                       // tags associated to the game to assist search function
  streamLink: String,                                                   // url for the stream
  twitterLink: String,                                                  // url for associated twitter
  date: Date,                                                           // date the tournament is taking place
  startTime: Date,                                                      // start time for tournament
  endTime: Date,                                                        // end time for tournament
  venueAddress: String,                                                 // address of the venue
  venueFee: Number,                                                     // fee to attend tournament
  entryFee: Number,                                                     // fee to compete in the tournament
  sponsors:[String],                                                    // sponsors for the tournament
  potBonus: Number,                                                     // pot bonus (additional winnings provided by sponsors)
  maxEntrants: Number,                                                  // max number of entrants (tournament size)
  bannerImage: String,                                                  // url to the cdn where the user uploaded banner will be saved
  series: Boolean,                                                      // whether or not the tournament is a series (ex: weekly tournament)
  forum: [postSchema]                                                   // array of posts users have posted on the tournament
});

mongoose.model('tournaments', tournamentSchema);
