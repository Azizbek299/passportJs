const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;




//  ****************  For Github

const GIT_CLIENT_ID = '5e7fc46e5048f4b53597'
const GIT_CLIENT_SECRET = '1c65b20765c0074f4bf6dc4e0399016fb5735ef2'

passport.use(new GithubStrategy({
    clientID: GIT_CLIENT_ID,
    clientSecret: GIT_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null, profile)
  }
));




//  ****************  For Google

const GOOGLE_CLIENT_ID = '767235241304-aab5jboslnuhhsfclgh8l0htke1ges5u.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null, profile)
  }
));



//  ****************  For Facebook

const FACEBOOK_CLIENT_ID = '279434310439612'
const FACEBOOK_CLIENT_SECRET = 'a794caf9864c7a617b5c02d32a3f84a0'

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null, profile)
  }
));




passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})