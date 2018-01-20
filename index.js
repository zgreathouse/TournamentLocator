const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

//class Models
require('./models/User');
require('./models/Tournament');
require('./models/Post');
require('./models/Comment');

//services
require('./services/passport/facebookStrategy');

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

//create instance of express
const app = express();

//middlewares
app.use(
  cookieSession({
    maxAge: 2592000000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//routes
require('./routes/authRoutes')(app);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
