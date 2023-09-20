const { postFilterController } = require("../controllers/postFilterController");

const postFilterHandler = async (req, res) => {
  const { status, country } = req.body;
  try {
    let users = [];
    const accessCode = req.query.code;
    if (req.query.code && accessCode === "132435") {
      users = await postFilterController(status, country, req);
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFilterHandler,
};
