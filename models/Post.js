const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = require('./Comment');

//User Schema
const postSchema = new Schema({
  tournamentId: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  datePosted: Date,
  comments: [commentSchema]
});

mongoose.model('posts', postSchema);
