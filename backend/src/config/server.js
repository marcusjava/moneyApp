const port = 3003;
// const port = 80;
// middleware
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("./cors");
const queryParser = require("express-query-int");

const server = express();

// todas as requisões são encodadas num formato correto pelo body-parser
server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(cors);
server.use(queryParser());

server.listen(port, function() {
  console.log(`BACKEND executando na porta ${port}`);
});

module.exports = server;
