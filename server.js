//Request Header Parser with express
var express = require('express');
var app = express();

app.get('*', function(req,res){
  
  //get ip
  var ipaddr = req.connection.remoteAddress.match(/.+:(.+)/)[1];
  //get lang
  var lang = req.headers["accept-language"].match(/(.+),/)[1];
  //get os
  var os = req.headers["user-agent"].match(/.+?\((.+?)\)/)[1];
  
  //make obj
  var retObj = { 'ipaddress': ipaddr 
               , 'language': lang
               , 'software': os };
  
  //send
  res.end(JSON.stringify(retObj));
})

var listener = app.listen( process.env.PORT, function () {
  console.log("init port: ", listener.address().port);
});