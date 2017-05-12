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

app.get('/fake_monthly_data', function(request, response){
    response.contentType('application/json');
    var response_text = JSON.stringify({"id": 1000, "created_by_user_id": 123, "userid": 456, "type": "monthlyContactFollowUpQuestions", "data": {"questions": [ {"id": "emailOldContacts", "input": "text", "question": "Do you want to email contacts you haven't followed up with this month?"}, {"id": "includePersonalNote", "input": "text", "question": "Do you want to include a personal note?"}, {"id": "personalNote", "input": "textarea", "question": "Tell us what you'd like to say:"}], "answers": {"emailOldContacts": true, "includePersonalNote": true, "personalNote": "$contactName, it's been too long! Let's catch up soon! Let me know what your schedule is like over the next few weeks."}}});
    response.send(response_text);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

