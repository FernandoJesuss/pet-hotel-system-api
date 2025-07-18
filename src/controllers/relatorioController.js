// backend/controllers/relatorioController.js
exports.relatorioServicos = (req, res) => {
  res.json({
    banhoETosa: 1200,
    hotel: 2200,
    creche: 1800,
    adestramento: 900
  });
};
