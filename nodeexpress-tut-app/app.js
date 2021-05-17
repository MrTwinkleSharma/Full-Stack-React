const http = require('http');

const server = http.createServer(function(req, res){
    console.log("Request is Incoming");
    console.log(req.url, req.method);
    
    res.setHeader('content-type', 'text/html');
    res.end("<h2>Server Works </h2>");
});


server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});
