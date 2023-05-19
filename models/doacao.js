const mongoose = require("mongoose");

const { Schema } = mongoose;

const doacaoSchema = new Schema({
  date: {
    type: Date,
    required: true,
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
  validity: {
    type: Date,
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
