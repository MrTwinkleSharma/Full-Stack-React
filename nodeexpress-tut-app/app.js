const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Server Works....")
});

server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});
