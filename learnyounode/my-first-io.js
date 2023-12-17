const fs = require('fs')

const fileBuffer = fs.readFileSync(process.argv[2])

const sFileContent = fileBuffer.toString()

console.log(sFileContent.split("\n").length - 1)