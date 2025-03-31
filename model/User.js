const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, //é obrigatório , //tem que ser único
    password: { type: String, required: true },
  }, { timestamps: true });
  
  // Criptografa a senha antes de salvar
  UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10); //10 complexidade do hash
    next();
  });
  
  module.exports = mongoose.model('User', UserSchema);