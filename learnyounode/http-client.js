const http = require('http')

http.get(process.argv[2], {'content-type': 'text/plain'}, 
    response => {
        response.setEncoding("utf8");
        response.on('data', data => console.log(data));
        response.on('error', error => console.error(error));
    }
);

//node http-client.js http://www.stackoverflow.com/questions/74784953/typeerror-err-invalid-url-invalid-url-using-next-auth-only-in-production