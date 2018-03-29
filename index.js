var express = require('express');
var bodyParser = require('body-parser');
var processM = require('./processMessage');

var app = express();

//GET -> Not used for now
app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end();

});

//POST
app.use(bodyParser.json());

app.post('/data', function(request, response){  //local path :  localhost:8080/data

    var status = processM.checkData(request.body);
    switch (status) {
        case 200:
            response.status(200).send('jSon valide');
            processM.sendToBdd(request.body);
            break;
        case 400:
            response.status(400).send('Gps disabled');
            break;
        case 404:
            response.status(404).send('Bad request | Invalid Json');
            break;
        default:
            response.status(404).send('Bad request | Unknow error');
            break;
    }
    response.end();
});


//Page Not Found
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');

    res.status(404).send('Page introuvable !');

});

app.use(function(err, req, res, next) {
    res.status(404).send('Bad request | SyntaxError: Unexpected token');
});


app.listen(8080);