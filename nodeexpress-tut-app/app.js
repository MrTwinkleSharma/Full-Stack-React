const http = require('http');
const {readFileSync}  = require('fs');

const indexhtml = readFileSync('index.html');
const bootstrapcss = readFileSync('./assets/bootstrap.css');
const stylecss = readFileSync('./assets/style.css');
const bannerjpg = readFileSync('./assets/banner.jpg');

const server = http.createServer(function(req, res){
    console.log("Request is Incoming");
    console.log(req.url, req.method);  

    // Setting all the Resources
    if(req.url=== '/assets/bootstrap.css')
    { 
        res.writeHead(200,{'content-type': 'text/css'});
        res.write(bootstrapcss);
        res.end();
    }  
    if(req.url=== '/assets/style.css')
    { 
        res.writeHead(200,{'content-type': 'text/css'});
        res.write(stylecss);
        res.end();
    } 
    if(req.url=== '/assets/banner.jpg')
    { 
        res.writeHead(200,{'content-type': 'image/jpg'});
        res.write(bannerjpg);
        res.end();    
    }     
    
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