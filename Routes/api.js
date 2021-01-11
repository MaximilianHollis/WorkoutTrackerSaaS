const express = require('express');
const apiRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/Users');
const Workout = require('../models/Workouts');
var cors = require('cors')

apiRouter.use(cors({ origin: 'http://localhost:3000'}));

const signToken = userID => {
    return JWT.sign({
        iss: "Maskify",
        sub: userID
    }, "WorkoutTracker", { expiresIn: "24h"});
}

//Registeration
apiRouter.post('/register', (req, res) => {
    const { username, password, plan } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).json({ message: 'an unexpected error has occured'});
        }
        if (user) {
            res.status(400).json({ message: 'username taken' });
        }
        else {
            const newUser = new User({ username, password, plan, verified: false });
            newUser.save(err => {
                if (err)
                    res.status(500).json({ message: 'an unexpected error has occured' });
                else
                    res.status(201).json({ message: 'account successfully created' });
            });
        }
    });
});

//Login
apiRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username, plan } = req.user;
        const token = signToken(_id);
        //not production grade code
        res.setHeader('set-cookie', `access_token=${token}`)
        res.status(200).json({ isAuthenticated: true, user: { username, plan } });
    }
});

//Logout
apiRouter.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.setHeader('set-cookie', `access_token=null`)
    res.json({ user: { username: "", plan: "" }, success: true });
});

//CRUD OPERATIONS

//Create a workout
apiRouter.post('/workout', passport.authenticate('jwt', {session: false}), (req, res) => {
    const newWorkout = new Workout(req.body);
    newWorkout.save(err => {
        if(err){
            res.status(500).json({message: 'an unexpected error occured'})
        } else {
            res.status(200).json({message: 'successfully created a new workout'})
        }
    });
});

//Read all workouts

apiRouter.get('/workout', passport.authenticate('jwt', {session: false}), (req, res) => {
    User.findById({_id: req.user._id}).populate('workouts').exec((err, document) => {
        if(err){
            res.status(500).json({message: 'an unexpected error has occured'});
        } else{
            res.status(200).json({workouts: document.workouts, authenticated: true});
        }
    });
});

//Update a workout

//Delete a workout


module.exports = apiRouter;