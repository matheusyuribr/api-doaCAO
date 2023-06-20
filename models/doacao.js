const mongoose = require("mongoose");

const { Schema } = mongoose;

const doacaoSchema = new Schema({
  date: {
    type: String,
    required: true,
    unique: true, // Adicionado para garantir que não haja doações na mesma data e hora
  },
  type: {
    type: String,
    enum: ["medicamentos", "roupas", "brinquedos", "outros"],
    default: "outros",
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["em andamento", "concluida", "rejeitada"],
    default: "em andamento",
  },
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});


const Doacao = mongoose.model("Doacao", doacaoSchema);

module.exports = {
  Doacao,
};
