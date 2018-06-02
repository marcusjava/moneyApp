const restful = require("node-restful");
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
});

const debtSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"]
  }
});

const cicloPagamentoSchema = new mongoose.Schema({
  nome: { type: String, required: [true, "Informe o nome"] },
  mes: { type: Number, min: 1, max: 12, required: true },
  ano: { type: Number, min: 1970, max: 2100, required: true },
  creditos: [creditSchema],
  debitos: [debtSchema]
});

module.exports = restful.model("CicloPagamento", cicloPagamentoSchema);
