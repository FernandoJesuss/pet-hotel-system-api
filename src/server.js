// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
require('dotenv').config();

const tutorRoutes = require('./routes/tutorRoutes');
const vendasRoutes = require('./routes/vendasRoutes');
const relatorioRoutes = require('./routes/relatorioRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Rotas principais
app.use('/api/tutor', tutorRoutes);
app.use('/api/vendas', vendasRoutes);
app.use('/api/relatorio', relatorioRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});