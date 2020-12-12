const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })

})


passport.use(
    new GoogleStrategy(
        {
          clientID: keys.googleClientID,
          clientSecret: keys.googleClientSecret,
          callbackURL: '/auth/google/callback',
          proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            console.log(profile.emails[0].value)
            const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
              return done(null, existingUser);
            }
            const photo = profile.photos[0] ? profile.photos[0].value : null
            // console.log("PROFILE", profile);
            const user = await new User({
              googleId: profile.id,
              first_name: profile.name.givenName,
              last_name: profile.name.familyName,
              email: profile.emails[0].value,
              photo: photo
            }).save()
            done(null, user)
          }
          catch (err) {
            console.log(err);
          }
          const user = await new User({
            
            googleId: profile.id
            //name: profile.name,
            //picture: profile.picture,
            //email: profile.email,
          }).save()
          done(null, user)
    
        }
    )
);