"use strict";

const express = require('express');
const path = require('path');
const _ = require('lodash');



const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/music', function(req, res) {
	res.render('music');
});

app.get('/dev', function(req, res) {
	res.render('dev');
});



app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});
