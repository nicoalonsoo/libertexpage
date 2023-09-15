const { User } = require('../db');

const putUserController = async ( name, email, status ) => {
    // Busca el registro en la base de datos por su ID
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw new Error('No se encontró el usuario');
    }

    // Actualiza los campos que deseas modificar
    if(name) {
      user.name = name;
    }
    if(email){
      user.email = email;
    }
    if(status){
      user.status = status;
    }
    await user.save();

    return user;
};

module.exports = {
  putUserController
};