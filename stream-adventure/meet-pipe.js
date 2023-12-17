const fs = require('fs')

fs.createReadStream(process.argv[2]).pipe(process.stdout)

//"Pipe" passes a Readable stream data to Writable Stream