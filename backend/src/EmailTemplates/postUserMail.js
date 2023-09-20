const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Correo Electrónico</title>
  <style>
  .container {
    margin-left: 200px;
    margin-right: 200px;
  }

  p {
    font-size: 16px;
    /* Establece el tamaño de fuente para las etiquetas <p> */
  }
          ul {
          list-style-type: square;
          margin-left: 20px;
      }
      
      li {
          font-size: 16px; /* Cambiar el tamaño de fuente de las <li> */
          color: #333; /* Cambiar el color del texto de las <li> */
      }

      a.button {
          display: block;
          width: 200px; /* Ancho del botón */
          margin: 0 auto; /* Centrar el botón horizontalmente */
          padding: 10px; /* Espaciado interno del botón */
          text-align: center;
          background-color: #ffa323; /* Color de fondo del botón */
          color: #fff; /* Color del texto del botón */
          font-size: 16px; /* Tamaño de fuente del botón */
          text-decoration: none; /* Eliminar subrayado de enlace */
          border-radius: 5px; /* Borde redondeado del botón */
      }

  </style>
</head>

<body>  
<div class="container">
<div class="content">
  <h2>Hola %NOMBRE% ¿Quieres crecer tu rentabilidad? Te dejo la revisión del video.</h1>
  <p>Enviado a %EMAIL%</p>
  <a href="https://libertextradingclub.vercel.app/unsubscribe?email=%EMAIL%" >Unsubscribe</a>
  <a href="https://libertextradingclub.vercel.app/video" class="button">Ver el video</a>
  </div>
  </div>
</body>
</html>
`

module.exports = emailTemplate;
