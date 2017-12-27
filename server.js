'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();

server.use(express.static('./static'));
server.use(bodyParser.json());

server.get('/', function(re, res){
    res.sendFile(path.resolve("./index.html"));
});
server.listen(5151);