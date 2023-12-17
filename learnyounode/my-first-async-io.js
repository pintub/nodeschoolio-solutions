const fs = require('fs')

fs.readFile(process.argv[2], {encoding: 'utf8'}, 
(err, sFileContent) => {
    if(err) {
        console.error(`Error log ${err}`)
    } else {
        console.log(sFileContent.split('\n').length - 1);
    }
});