const passport = require('passport');
const mongoose = require('mongoose')
const keys = require('../config/keys');



passport.use(
  new FacebookStrategy(
    {
      clientID: ,
      clientSecret: ,
      callbackURL: ,
    },
    async (accessToken, refreshToken, profile, done) => {
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
