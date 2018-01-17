const mongoose = require('mongoose');
const { Schema } = mongoose;

//Comment Schema
const commentSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },                  //id of user who submitted the comment
  _post: { type: Schema.Types.ObjectId, ref: 'Post' },                  //id of post the comment belongs to.
  body: String,                                                         //body of the comment
  dateSubmitted: Date                                                   //date comment was submitted
});

mongoose.model('comments', commentSchema);
