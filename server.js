"use strict";

const express = require('express');
const getHeaders = require('./services/headers');

const server = express();

server.get('/', (req, res) => {
  const json = getHeaders(req.headers);
  
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(json);
});

server.listen(process.env.PORT, function () {
  console.log('Server listening on port ' + process.env.PORT )
});