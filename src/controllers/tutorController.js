// backend/controllers/tutorController.js
const Tutor = require('../models/tutorModel');

exports.addTutor = async (req, res) => {
  try {
    const tutor = new Tutor(req.body);
    await tutor.save();
    res.status(201).json({ message: 'Cadastro realizado com sucesso!', data: tutor });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar tutor' });
  }
};