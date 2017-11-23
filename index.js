const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/database'); 
const path = require('path');

mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Database Connection Error');
    } else {
        console.log('Connect to Database');
    }
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/client/dist/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.get('*', (req, res) =>{
    res.send('<h1> Test Astric Route </h1>');
});

app.listen(8080, () => {
    console.log('Server Run 8080');
});