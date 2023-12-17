const fs = require('fs')

fs.readdir(process.argv[2], {encoding: "utf8"}, 
    (err, arrFileNames) => {
        if(err) {
            console.error(`Error ${err}`)
        } else {
            arrFileNames.filter(sFileName => sFileName.endsWith("." + process.argv[3])).forEach(sFileName => console.log(sFileName));
        }
    }
);