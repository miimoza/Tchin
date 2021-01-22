var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/partyDB';
var buffer = "";

app.route('/Employeeid').get(function(req, res) {
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('party');
       var cursor = collection.find({});
       buffer = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   buffer = buffer + "    Party Id  " + item.id + "</br>";
           }
       }, function(err) {
           res.send(err);
           db.close();
          }
       );
   });
});
var server = app.listen(8080, function() {});
