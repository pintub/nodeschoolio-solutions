const { request } = require('http');
const { stdin } = require('process');

const reqStream = request('http://localhost:8091', 
{ method: 'POST' }, (res) => {  
    res.pipe(process.stdout);
  });

process.stdin.pipe(reqStream);ß