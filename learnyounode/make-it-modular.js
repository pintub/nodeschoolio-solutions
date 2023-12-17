const mymodule = require("./mymodule.js")

mymodule(process.argv[2], process.argv[3], 
    (err, arrFileNames) => {
        if(err) {
            console.error(`Error ${err}`)
        } else {
            arrFileNames.forEach(element => {
              console.log(element)
            })
        }
    }
);

