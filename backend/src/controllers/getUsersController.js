const { User } = require("../db.js");
const { Sequelize } = require('sequelize');


const getUsersController = async(req) => {
    try {
      const page = parseInt(req.query.page) || 1; // Página actual (por defecto 1)
      const limit = 10; // Cantidad de usuarios por página
      const search = req.query.search;
      let users;

      const order = req.query.order || "asc"; // Establece el orden predeterminado como ascendente si no se proporciona uno

      const orderCriteria = [["createdAt", order]]; // Ordena por la columna "createdAt" en el orden especificado

      if (search) {
        users = await User.findAndCountAll({
          where: {
            status: 'Activo',
            [Sequelize.Op.or]: [
              Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', `%${search.toLowerCase()}%`),
              Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('owner')), 'LIKE', `%${search.toLowerCase()}%`),
              Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('email')), 'LIKE', `%${search.toLowerCase()}%`),
            ],
          },
          order: orderCriteria,
          limit,
          offset: (page - 1) * limit,
        });
      }
      else if (req.query.id) {
        users = await User.findOne({ where: { id: req.query.id } });
      } else {
        users = await User.findAndCountAll({
          where: { status: 'Activo' },
          order: orderCriteria, 
          limit,
          offset: (page - 1) * limit,
        });
      }
      return users;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar los usuarios')
    }
  };

module.exports = {
    getUsersController
};
