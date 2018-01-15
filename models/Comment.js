const mongoose = require('mongoose');
const { Schema } = mongoose;

//Comment Schema
const commentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post'},
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  body: String,
  dateSubmitted: Date
});

mongoose.model('comments', commentSchema);
