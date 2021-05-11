const http = require('http');

const server = http.createServer();

server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});
