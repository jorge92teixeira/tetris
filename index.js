const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT || 3003, () => {
  console.log(`Tetris server running on ${process.env.PORT || 3003}`);
});
