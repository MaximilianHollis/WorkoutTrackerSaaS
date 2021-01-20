const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const JwtExtractor = require('passport-jwt').ExtractJwt;
const User = require('../Models/Users');

const cookieExtractor = req => {
    let token = null;
    console.log(req.headers.authorization)
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    //not prod
    secretOrKey: "ifyoucanseethisduringproductioniscrewedsomethinguphorribly"
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false);
        if (user)
            return done(null, user);
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
