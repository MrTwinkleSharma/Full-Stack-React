const http = require('http');

const server = http.createServer(function(req, res){
    console.log("Request is Incoming");
    console.log(req.url, req.method);
    
    res.setHeader('content-type', 'text/html');
    
    if(req.method == "POST"){
        let body = '';
        req.on('end',()=>{
            console.log(body);
            res.end("<h2>Got the POST request</h2>")
        });

        req.on('data', (chunks)=>{
            body+=chunks;
        });
    }

    else 
    res.end('<form method="POST"> <input type="text" name="username"><button type="submit">Create User</button></form>');

});


server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});
