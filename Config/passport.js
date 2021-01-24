const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../Models/Users');

passport.use(new JwtStrategy({
    issuer: "WorkoutSaaS",
    secretOrKey: process.env.JwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

}, async(payload, done) => {
    console.log(payload)
    await User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false);
        if (user){
            return done(null, user);
        }
        else
            return done(null, false);
    });
}));

// authenticated local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        // someting went wrong with database
        if (err)
            return done(err);
        // if no user exist
        if (!user)
            return done(null, false);
        // check if password is correct
        user.comparePassword(password, done);
    });
}));
