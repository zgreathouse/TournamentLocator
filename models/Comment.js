const mongoose = require('mongoose');
const { Schema } = mongoose;

//User Schema
const commentSchema = new Schema({
  postId: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  body: String,
  dateSubmitted: Date
});

mongoose.model('comments', commentSchema);
