const http = require('http');

const server = http.createServer(function(req, res){
    console.log("Request is Incoming");
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/html')
        
    if(req.url=== '/')
    {
        
        res.write("<h2>Welcome to Home Page</h2>")
        res.end();
    }
    if(req.url==='/about')
    {

        res.write(`<h2>This is About Page</h2>
                <p>Hi, My name is Twinkle Sharma, 
                I am Sophomore at Computer Science & Engineering</p>`);
        res.end();
    }

    res.end(`
    <h2>Oops!</h2>
    <p>The page you were Looking for doesn't exist</p>
    <a href='/'>Go to HomePage</a>
    `);
});
-
server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});