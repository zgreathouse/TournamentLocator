const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose')
const keys = require('../../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => { done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback'
    }, async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookID: profile.id });

      //sign in
      if (existingUser) {
        return done(null, existingUser);
      }

      //sign up
      const user = await new User({ facebookID: profile.id}).save();
      done(null, user);
    }
  )
);
