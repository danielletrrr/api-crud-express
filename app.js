const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config();
const app = express();

// Middlewares #permitir conexão entre apps de outros domínios
app.use(cors());
app.use(express.json()); // Para receber JSON no body

// Conexão com o MongoDB (config/db.js)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar:', err));

// Rotas
app.use('/api/users', userRoutes); // Todas as rotas CRUD aqui

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));