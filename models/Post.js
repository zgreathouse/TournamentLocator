const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = require('./Comment');

//Post Schema
const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },                   // id of user who submitted the post
  _tournament: { type: Schema.Types.ObjectId, ref: 'Tournament'},       // id of tournament the post belongs to
  title: String,                                                        // title of the post
  body: String,                                                         // body of the post
  datePosted: Date,                                                     // date the post was submitted
  comments: [commentSchema]                                             // array of comments which belong to the post
});

mongoose.model('posts', postSchema);
