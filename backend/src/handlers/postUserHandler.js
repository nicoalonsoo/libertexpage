const postUserController = require("../controllers/postUserController");
const { mailHandler } = require('./postMailHandler');
const postUserHandler = async (req, res) => {
  try {
    const { email, rol, name, phone, countryCode } = req.body;
    const userPosted = await postUserController(email, rol, name, phone, countryCode);
    const asunto = 'Bienvenido';
    const destinatario = email;
    const cuerpo = 'Gracias por inscribirte, te compartimos el video!'
    await mailHandler(destinatario, asunto, cuerpo);
    return res.status(200).json(userPosted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
};
