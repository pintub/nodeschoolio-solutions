const http = require('http')

http.get(process.argv[2], {'content-type': 'text/plain'}, 
    response => {
        let sWholeBody = "";

        response.setEncoding("utf8");
        response.on('data', data => sWholeBody += data)
                .on('end', () => {
                    console.log(sWholeBody.length);
                    console.log(sWholeBody);
                });
    }
);

//node http-client.js http://www.stackoverflow.com/questions/74784953/typeerror-err-invalid-url-invalid-url-using-next-auth-only-in-production


//https://stackoverflow.com/a/51109351/2653389
//request.on('data',...) may emit only once or it may emit hundreds of times. It depends upon the size of the data, the configuration of the stream object and the type of stream behind it. You cannot ever reliably assume it will only emit once.
