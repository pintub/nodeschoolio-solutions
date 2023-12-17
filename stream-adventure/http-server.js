const http = require('http')  
const through = require('through2')  

const server = http.createServer(function (req, res) {  
    if (req.method === 'POST') {  
      req.pipe(through(
        function (buffer, encoding, next) { 
            this.push(buffer.toString().toUpperCase())  
            next()  
        } 
      )).pipe(res)
    } else {
        res.end('TRY POST CALLS\n')  
    }
  });  
  
  server.listen(process.argv[2]) 


  //curl -d "hello" http://localhost:8001