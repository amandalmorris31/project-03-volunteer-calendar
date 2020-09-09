const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    // opp to take id info and save into our db
    async (accessToken, refreshToken, profile, done) => {
      //console.log("access token", accessToken);
      //console.log("refresh token", refreshToken);
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        userID = existingUser._id;

        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        picture: profile.photos[0].value,
        email: profile.emails[0].value
      }).save();
      userID = user._id;
      done(null, user);
      console.log(profile);
    }
  )
);
