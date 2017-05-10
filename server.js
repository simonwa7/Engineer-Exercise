var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname)));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/readme', function(request, response){
  response.sendFile(path.join(__dirname + '/README.md'))
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

