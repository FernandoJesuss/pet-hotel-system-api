
const { gerarNotaFiscal } = require('../utils/gerarNotaFiscal');

exports.gerarNota = (req, res) => {
  const { nome, servico, valor } = req.body;
  const nota = gerarNotaFiscal(nome, servico, valor);
  res.send(nota);
};
