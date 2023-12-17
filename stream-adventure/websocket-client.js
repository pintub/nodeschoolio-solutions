const {WebSocket, createWebSocketStream} = require('ws');

const ws = new WebSocket('ws://localhost:8080/');

const duplexStream = createWebSocketStream(ws, { encoding: 'utf8' });

duplexStream.on('error', console.error);

duplexStream.pipe(process.stdout);
process.stdin.pipe(duplexStream);


//A mock WebSocket Server wss://websocket-echo.com/

//Corresponding we server implemented @ ./websocket-server.js

//Takes stdin input and sends. Also accepts ws response and prints to stdout