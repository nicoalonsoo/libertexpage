const { User } = require('../db');

const putUsersController = async (users) => {
  try {
    // Itera sobre la lista de actualizaciones de usuarios
    for (const { id, name, email, status, checked, owner } of users) {
      // Busca el registro en la base de datos por su ID
      console.log(id);
      const user = await User.findOne({ where: { id } });
      if (!user) {
        throw new Error(`No se encontró el usuario con ID ${id}`);
      }

      // Actualiza los campos que deseas modificar
      if (name) {
        user.name = name;
      }
      if (email) {
        user.email = email;
      }
      if (status) {
        user.status = status;
      }
      if (checked !== undefined) {
        user.checked = checked;
      }
      if (owner) {
        user.owner = owner;
      }

      // Guarda los cambios en la base de datos
      await user.save();
    }

    return 'Registros modificados correctamente';
  } catch (error) {
    throw error;
  }
};

module.exports = {
    putUsersController
};
