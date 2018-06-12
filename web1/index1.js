var http = require('http');
var os = require('os');
var Netcat = require('node-netcat');
var fs = require('fs');

var client = Netcat.client(5044, 'elk');

console.log(" * NODE server running on port 8080");

http.createServer(function (req, res) {
    // client.start();
    // client.send('TTTTTTTTTTEEEEEEST' + '\n');
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>I'm ${os.hostname()}!!!</h1>`);

    fs.appendFileSync("/usr/src/app/logs/log1.log", `[INFO] ${os.hostname()} \n`, function(err) {
        if(err) {
            console.log(err);
        }
    }); 


}).listen(8080);

