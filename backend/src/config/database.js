const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio";
mongoose.Error.messages.Number.min =
  "O valor informado '{VALUE}' é menor que o limite minimo de '{MIN}'";
mongoose.Error.messages.Number.max =
  "O valor informado '{VALUE}' é maior que o limite maximo de '{MAX}'";

// module.exports = mongoose.connect("mongodb://localhost/moneyapp");
module.exports = mongoose.connect(
  "mongodb://marcus:paletizado@ds135540.mlab.com:35540/moneyapp"
);
