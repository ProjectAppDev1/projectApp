const http = require('http');
const WebSocket = require('ws'); 

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server');
});

wss.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log('Received:', message);
    socket.send('Hello, client!');
  });
});

server.listen(5000, () => {
  console.log('WebSocket server is listening on port 5000');
});
