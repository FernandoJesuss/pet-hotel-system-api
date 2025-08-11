
const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  endereco: String,
  pet: {
    nome: String,
    raca: String,
    alergias: String,
  },
  termosAceitos: Boolean
});

module.exports = mongoose.model('Tutor', tutorSchema);