"use strict";

const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(req.headers));
});

server.listen(process.env.PORT, function () {
  console.log('Server listening on port ' + process.env.PORT )
});