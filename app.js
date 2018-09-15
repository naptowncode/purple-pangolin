'use strict';

const connect = require('connect');
const http = require('http');

const { PORT } = process.env;
const app = connect();

app.use((req, res) => {
  const message = `
Purple Pangolin says hello!
Current time is ${new Date()}
`;

  res.end(message);
});

http.createServer(app).listen(PORT);
