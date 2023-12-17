const http = require('http');
const fs = require('fs');


const port = process.argv[2];
const sfilename = process.argv[3];

const server = http.createServer((req, res) => {
	res.writeHead('200', { 'Content-Type' : 'text/plain'});
	fs.createReadStream(sfilename).pipe(res);
});
server.listen(port);
server.on('error', console.error);