// backend/utils/gerarNotaFiscal.js
exports.gerarNotaFiscal = (nome, servico, valor) => {
  return `Nota Fiscal\nCliente: ${nome}\nServiço: ${servico}\nValor: R$${valor}`;
};