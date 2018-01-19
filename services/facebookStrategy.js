const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => { done(null, user);
  });
});

passport.use(new FacebookStrategy(
  {
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    profileFields: ['id', 'displayName', 'email']
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      console.log('Profile', profile);
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
    } catch(error) {
      done(error, false, error.message);
    }
  })
);
