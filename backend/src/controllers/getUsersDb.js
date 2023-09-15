const { User } = require('../db'); // Asegúrate de importar tu modelo correctamente

async function getDataFromPostgreSQL() {
  try {
    // Realiza la consulta a la tabla "Users"
    const users = await User.findAll();

    // Devuelve los datos en el formato adecuado para Excel
    return users.map((user) => ({
      name: user.name,
      status: user.status,
      email: user.email,
      phone: user.phone,
      countryCode: user.countryCode,
      rol: user.rol,
    }));
  } catch (error) {
    console.error('Error al obtener datos de PostgreSQL:', error);
    throw error;
  }
}

module.exports = {
  getDataFromPostgreSQL,
};