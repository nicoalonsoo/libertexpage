const { postFilterController } = require("../controllers/postFilterController");

const postFilterHandler = async (req, res) => {
  const {
    status,
    country,
  } = req.body;
  try {
    const users = await postFilterController(
        status,
        country,
    );
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFilterHandler,
};
