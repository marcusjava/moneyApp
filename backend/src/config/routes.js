const express = require("express");

module.exports = function(server) {
  // URL base para todas as rotas
  const router = express.Router();
  server.use("/api", router);

  // Ciclo de pagamento
  const cicloPagamento = require("../api/ciclopagamento/cicloPagService");
  // api/ciclopagamento
  cicloPagamento.register(router, "/ciclopagamentos");
};
