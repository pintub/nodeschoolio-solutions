const { stdin } = require('process');
const { Writable } = require('stream')  
       
class MyCustomWritable extends Writable {  
    _write(chunk, encoding, callback) {  
        console.log("writing: " + chunk.toString());
        callback(null);
    }  
} 


const writeStreamObj = new MyCustomWritable();

process.stdin.pipe(writeStreamObj);