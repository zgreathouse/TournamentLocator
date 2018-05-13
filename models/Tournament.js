const mongoose = require('mongoose');
const { Schema } = mongoose;

//Tournament Schema
const tournamentSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },                  // id of user who created the tournament
  title: String,                                                        // title of the tournament
  game: String,                                                         // featured game(s)
  tags: [String],                                                       // tags associated to the game to assist search function
  description: String,                                                  // tournament description
  streamLink: String,                                                   // url for the stream
  twitterLink: String,                                                  // url for associated twitter
  startTime: Date,                                                      // start time for 'one off' tournament
  endTime: { type: Date, expires: 60 },                                 // end time for 'one off' tournament
  seriesStartTime: String,                                              // start time for series
  seriesEndTime: String,                                                // end time for series
  seriesDay: String,                                                    // day of the week for series
  city: String,                                                         // city the venue is in
  streetAddress: String,                                                // street address of the venue
  venueFee: Number,                                                     // fee to attend tournament
  entryFee: Number,                                                     // fee to compete in the tournament
  sponsors:[String],                                                    // sponsors for the tournament
  potBonus: Number,                                                     // pot bonus (additional winnings provided by sponsors)
  maxEntrants: Number,                                                  // max number of entrants (tournament size)
  bannerImage: String,                                                  // url to the cdn where the user uploaded banner will be saved
  forum: [String]                                                       // array of IDs of posts users have posted on the tournament
});

mongoose.model('tournaments', tournamentSchema);
