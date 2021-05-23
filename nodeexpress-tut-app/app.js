const http = require('http');
const {readFileSync}  = require('fs');

const indexhtml = readFileSync('index.html');

const server = http.createServer(function(req, res){
    console.log("Request is Incoming");
    console.log(req.url, req.method);  
    
    if(req.url=== '/')
    { 
        res.writeHead(200,{'content-type': 'text/html'});
        res.write(indexhtml)
        res.end();
    }
    else{
        res.writeHead(404,{'content-type': 'text/html'});
        res.end(`
        <h2>Oops!</h2>
        <p>The page you were Looking for doesn't exist</p>
        <a href='/'>Go to HomePage</a>
        `);
    }
});

server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});