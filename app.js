var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));

//---------------------------- IP ADDRESS AND PORT NO ---------------------------// 

var url = "http://127.0.0.1:8080/Index";

app.get('/', function(req,res){

    request({
    url: url,
    json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            var todos = body;
            console.log(todos);
            res.render('home',{
            items : todos
            });
        }
    });
});

app.get('/upvote', function(req,res){

    var value = req.query.val;
    console.log("upvote");
    console.log(value);

    //---------------------------- IP ADDRESS AND PORT NO ---------------------------//

    var url = "http://127.0.0.1:8080/UpVote?imagelink=".concat(value);
    console.log(url);
    
    request({
    url: url,
    json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            
            res.redirect('/');
        }
    });
});

app.get('/downvote', function(req,res){

    var value = req.query.val;
    console.log("downvote");
    console.log(value);

    //---------------------------- IP ADDRESS AND PORT NO ---------------------------//

    var url = "http://127.0.0.1:8080/DownVote?imagelink=".concat(value);
    console.log(url);
    
    request({
    url: url,
    json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            
            res.redirect('/');
        }
    });
});

module.exports = app;