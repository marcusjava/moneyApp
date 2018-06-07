const express = require("express");
const auth = require("./auth");

module.exports = function(server) {
  /*
     * Rotas protegidas por Token JWT
     */
  const protectedApi = express.Router();
  server.use("/api", protectedApi);

  protectedApi.use(auth);

  const CicloPagamento = require("../api/ciclopagamento/cicloPagService");
  CicloPagamento.register(protectedApi, "/ciclopagamentos");

  /*
     * Rotas abertas
     */
  const openApi = express.Router();
  server.use("/oapi", openApi);

  const AuthService = require("../api/user/authService");
  // openApi.post("/login", function(req, res) {
  //   AuthService.login;
  // });
  // openApi.post("/signup", function(req, res) {
  //   AuthService.signup;
  // });
  // openApi.post("/validateToken", function(req, res) {
  //   AuthService.validateToken;
  // });
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);
};
