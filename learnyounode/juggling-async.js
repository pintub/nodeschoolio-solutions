const http = require('http')

let arrResult = Array(process.argv.length - 2);

let count = 0;

for (let key = 2; key < process.argv.length; key++) {
    http.get(process.argv[key], {'content-type': 'text/plain'}, 
        response => {
            let sWholeBody = "";

            response.setEncoding("utf8");
            response.on('data', data => sWholeBody += data)
                    .on('end', () => {
                        ++count;
                        arrResult[key] = sWholeBody

                        if(count == process.argv.length - 2) {
                            arrResult.forEach(element => console.log(element));
                        }
                    });
        }
    );
}