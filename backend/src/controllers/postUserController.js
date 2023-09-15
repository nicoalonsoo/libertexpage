const { User } = require("../db");

const postUserController = async (email, rol, name, phone, countryCode, country) => {
  let user;
  // Buscar si existe un usuario con la misma dirección de correo electrónico y proveedor
  // let user = await User.findOne({ where: { email, provider } });

  // No se encontró un usuario con la misma dirección de correo electrónico y proveedor, crear uno nuevo
  user = await User.create({
    email,
    rol,
    name,
    phone,
    countryCode,
    country,
  });
  return user;
};

module.exports = postUserController;
