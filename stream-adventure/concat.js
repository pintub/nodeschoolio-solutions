const concat = require('concat-stream') 

process.stdin.pipe(concat(function (data) {  
        console.log(data.reverse().toString())
    }
));

//Concat all buffer/chunks in a stream and act upon it