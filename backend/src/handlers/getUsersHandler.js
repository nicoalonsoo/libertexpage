const { getUsersController } = require("../controllers/getUsersController");

const getUsersHandler = async (req, res) => {
  try {
    const accessCode = req.query.code;
    let users = [];
    if (req.query.code && accessCode === "132435") {
      users = await getUsersController(req);
    }
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
};
