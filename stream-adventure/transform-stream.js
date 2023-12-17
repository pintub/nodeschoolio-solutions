const through = require('through2')  
//const fs = require('fs')  

function write (buffer, encoding, next) { 
    this.push(buffer.toString().toUpperCase())  
    next()  
}  

function end (done) {  
    done()  
} 

const transformStream = through(write, end)

process.stdin.pipe(transformStream).pipe(process.stdout)

//fs.createReadStream('/Users/pib/Documents/nodeschoolio/stream-adventure/meet-pipe.js').pipe(process.stdout)
