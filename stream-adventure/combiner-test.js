const combiner = require('./combiner.js')
const fs = require('fs')

fs.createReadStream('./combiner-test-data.txt').pipe(combiner()).pipe(process.stdout)

