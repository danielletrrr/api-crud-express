const User = require('../model/User');

// CRUD Completo
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'Usuário criado!', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

exports.getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id); // Busca por ID
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id, // ID do usuário
        req.body,      // Novos dados
        { new: true }  // Retorna o usuário atualizado
      );
      if (!user) { //garante que o usuário foi encontrado antes de corrigir
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id); // Deleta por ID
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
  };
