const http = require('http');
const myEvents = require('events');

var myEventEmitter = new myEvents.EventEmitter();

const server = http.createServer(function(req, res){
    myEventEmitter.emit('someone requested');
    res.end("Server Works....");
});

myEventEmitter.on('someone requested', function(){
    console.log("A request happened on Server.");
});

server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});
