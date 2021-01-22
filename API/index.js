var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/party';
var buffer = "";

app.route('/party').get(function(req, res) {
   MongoClient.connect(url, function(err, db) {
       var collection = db.db('party');
       var cursor = db.find({});
       buffer = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   buffer = buffer + "    Party Names  " + item.name + "</br>";
           }
       }, function(err) {
           res.send(err);
           db.close();
          }
       );
   });
});
var server = app.listen(8080, function() {});
