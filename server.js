const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan')
app.use(cookieParser());
app.use(express.json());
app.use(morgan('tiny'))

app.use((req, res, next) => {
    //TODO
    //special domain relevant origin control 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

mongoose.connect('mongodb://localhost:27017/workoutServer', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

//Init API
const apiRouter = require('./Routes/api.js');
app.use('/api', apiRouter);

app.listen(5000, () => {
    console.log('server initialized')
})