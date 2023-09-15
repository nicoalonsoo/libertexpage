const { putUserController } = require('../controllers/putUserController.js');

const putUsersHandler = async (req, res) => {
  const email = req.query.email;
  console.log(email);
  const { name, status  } = req.body;
  try {
    await putUserController( name, email, status );
    res.send('Registro modificado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putUsersHandler
};