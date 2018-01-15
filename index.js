const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//class Models
require('./models/User');
require('./models/Tournament');
require('./models/Post');
require('./models/Comment');

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

//create instance of express
const app = express();

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
