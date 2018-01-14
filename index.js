const express = require('express');
const mongoose = require('mongoose');

//class Models
require('./models/User');
require('./models/Tournament');
require('./models/Post');
require('./models/Comment');

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
