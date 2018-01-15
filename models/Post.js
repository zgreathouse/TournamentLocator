const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = require('./Comment');

//Post Schema
const postSchema = new Schema({
  tournamentId: { type: Schema.Types.ObjectId, ref: 'Tournament'},
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  datePosted: Date,
  comments: [commentSchema]
});

mongoose.model('posts', postSchema);
