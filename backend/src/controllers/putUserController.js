const { User } = require('../db');

const putUserController = async (id, name, email, status ) => {
    // Busca el registro en la base de datos por su ID
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw new Error('No se encontró el usuario');
    }

    // Actualiza los campos que deseas modificar
    if(name) {
      user.username = username;
    }
    if(email){
      user.email = email;
    }
    if(phone){
      user.favorites = favorites;
    }
    if(status){
      user.status = status;
    }

    // Guarda los cambios en la base de datos
    await user.save();

    return user;
};

module.exports = {
  putUserController
};