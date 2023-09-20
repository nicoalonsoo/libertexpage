const { User } = require("../db");

const postFilterController = async (
  status,
  country,
  req
) => {
  const filters = {};
  if (country) {
    filters.country = country;
  }
  if (status) {
    if (status === 'todos') {
    } else {
      filters.status = status; 
    }
  } else {
    filters.status = 'Activo'; 
  }
  try {
    const page = parseInt(req.query.page) || 1; // Página actual (por defecto 1)
    const limit = 10; // Cantidad de usuarios por página
    const users = await User.findAndCountAll({
      where: filters,
      limit,
      offset: (page - 1) * limit,
    });
    return users;
  } catch (error) {
    throw new Error("No se pudo concretar el filtro");
  }
};

module.exports = {
  postFilterController,
};