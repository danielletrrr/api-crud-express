const mongoose = require('mongoose');
require('dotenv').config(); // Para acessar MONGODB_URI do .env

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conectado ao MongoDB no host:', mongoose.connection.host); // Mostra o host do banco
      console.log('Banco de dados:', mongoose.connection.name); // Mostra o nome do banco
    } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // Encerra o app se a conexão falhar
  }
};

connectDB();
module.exports = connectDB;


