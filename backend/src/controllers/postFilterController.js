const { User } = require("../db");

const postFilterController = async (
  status,
  country,
) => {
  const filters = {};
  if (country) {
    filters.country = country;
  }
  if (status) {
    filters.status = status;
  }
  try {
    const users = await User.findAll({
      where: filters,
    });
    return users;
  } catch (error) {
    throw new Error("No se pudo concretar el filtro");
  }
};

module.exports = {
  postFilterController,
};