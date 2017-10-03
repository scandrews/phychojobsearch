// This is the server for the Psycho Job Search application

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/assets/css/main", express.static(__dirname));
app.use("/assets/images/mocklogo.png", express.static(__dirname));
app.use("/assets/javascript/script", express.static(__dirname + '/javascript/script'));

// base directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// add other routes below
app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(process.env.PORT || 8080);