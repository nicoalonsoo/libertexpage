const { putUserController } = require('../controllers/putUserController.js');
const { putUsersController } = require('../controllers/putUsersController.js');

const putUsersHandler = async (req, res) => {
  const email = req.query.email;
  const { name, status, checked, owner, users } = req.body;
  try {
    if(users){
      await putUsersController(users)
    } else {
      await putUserController( name, email, status, checked, owner);
    }
    res.status(201).send(' correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putUsersHandler
};