const through2 = require('through2')
const split2 = require('split2') 

let _count = 0;

function write (buffer, encoding, next) { 
    if(_count % 2 === 0) {
        this.push(buffer.toString().toLowerCase() + "\n")
    } else {
        this.push(buffer.toString().toUpperCase() + "\n")
    }
    ++_count;
    next();
} 

const stream = through2(write)

process.stdin  
       .pipe(split2()) 
       .pipe(stream)
       .pipe(process.stdout);

//split2 acts as java flatmap(). Flatterns big-string of multiple lines to multiple small-strings where each small-string is one line
    