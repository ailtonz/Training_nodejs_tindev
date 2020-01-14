const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

const uri ='mongodb+srv://userTester:userTester@cluster0-f6k32.mongodb.net/omnistack8?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true });


server.use(express.json());
server.use(routes);

server.listen(3333);

// M - Model, V - View, C - Controller