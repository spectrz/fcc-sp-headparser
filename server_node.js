//Request Header Parser with node
var http = require('http');

var server = http.createServer( function(req, res) {
  console.log(req.connection.remoteAddress);
  console.log(req.headers["accept-language"]);
  console.log(req.headers["user-agent"]);
  
  //get ip
  var ipaddr = req.connection.remoteAddress.match(/.+:(.+)/)[1];
  //get lang
  var lang = req.headers["accept-language"].match(/(.+),/)[1];
  //get os
  var os = req.headers["user-agent"].match(/.+?\((.+?)\)/)[1];
  console.log(lang);
  console.log(os);
  
  //create object
  var retObj = { 'ipaddress': ipaddr
               , 'language': lang
               , 'software': os };

  //send out data
  res.end(JSON.stringify(retObj));
});

var listener = server.listen(process.env.PORT, function(){
  console.log("server up, port:" + listener.address().port);
});