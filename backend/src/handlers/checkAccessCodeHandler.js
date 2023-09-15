const { getUsersHandler } = require('./getUsersHandler')

function getCheckAccessCode(req, res, next) {
    const accessCode = req.query.code; // Obtén el código de acceso desde la solicitud
    console.log(accessCode);
    // Comprueba si el código de acceso es válido
    if (req.query.code && accessCode === '132435') {
      // Si el código es válido, permite el acceso
      getUsersHandler()
    } else {
      // Si el código no es válido, redirige o muestra un mensaje de error
      res.status(403).send('Acceso no autorizado');
    }
  }
  
  module.exports = { getCheckAccessCode };