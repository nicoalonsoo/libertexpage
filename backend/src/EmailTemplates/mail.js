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
  <h2>Hola %NOMBRE% ¿Quieres crecer tu facturación? Entonces sigue leyendo</h1>
  <p>Instalaremos nuestro sistema de marketing y ventas en tu negocio para captar clientes en escala de forma predecible y rentable.</p>
  <p>(Que nos genera +170.000 USD al mes con +60% de rentabilidad en promedio).</p>
  <p>Y si no generas hasta 50.000 USD / mes extras en menos de 6 meses…</p>
  <p>…TE DEVOLVEMOS TU DINERO Y PAGAMOS 2.000 USD.</p>
  <p>Sigue leyendo y te contaré.</p>
  <h3>1. Cómo funciona.</h3>
  <h3>2. Prueba de que funciona.</h3>
  <!-- Cómo funciona -->
  <h3>Cómo funciona:</h3>
  <p>Mi empresa se llama BlueHackers. Somos la empresa más grande de escalado de negocios high ticket en español.</p>
  <p>Ayudamos a coaches, infoproductores y agencias que facturan un mínimo de 1.000 USD / mes, a crecer a 100.000 USD al mes su negocio con mentoría 1-1 y garantías por contrato.</p>
  <p>Instalaremos nuestro sistema de marketing y ventas en tu negocio para captar clientes en escala de forma predecible y rentable.</p>
  <p>Duplicamos todos nuestros procesos internos de operaciones y entrega de servicio, para que puedas delegar tu negocio en un equipo, y aumentar la satisfacción y resultados de tus clientes</p>
  <p>Luego haremos un 80/20 de tu cliente ideal y convertiremos lo que vendes en una oferta high ticket irresistible para que puedas cobrar de 2.000 a 5.000 USD por cliente.</p>
  <p>Y te daremos nuestro proceso de ventas probado para que cierres clientes incluso si nunca has hecho una venta</p>
  <p>Y si no generas hasta 50K extras al mes (dependiendo de tu caso), NO PAGAS.</p>
  <p>(No somos una agencia externa, construimos esto dentro de tu negocio).</p>
  <!-- RESULTADOS -->
  <h3>RESULTADOS:</h3>
  <p>Hemos trabajado en escalar el negocio de líderes de la industria como…</p>
  <ul>
    <li>Tatiana Arias</li>
    <li>Mike Munzvil</li>
    <li>Cesar Rivero</li>
    <li>Luis Hinestrosa</li>
    <li>Javi Rodriguez</li>
    <li>Alvaro Reyes</li>
    <li>Sebastian Beja</li>
    <li>Santiago Paz</li>
  </ul>
  <p>Y otros 300 negocios de coaching, infoproductos y agencia en el último año.</p>
  <p>Y de hecho practicamos lo que predicamos.</p>
  <p>Hemos escalado nuestro negocio a +170K / mes con +60% de rentabilidad final luego de gastos e impuestos.</p>
  <p>Así que si quieres más información de cómo funciona todo esto…</p>
  <p><a href="URL_DEL_VIDEO">Toca aquí</a> y agenda una llamada luego de ver el vídeo.</p>
  <p>Te contamos todo en detalle en alrededor de 6 minutos. Cómo te dije… si no funciona, NO PAGAS y te pagamos hasta 2.000 USD. Así que no tenemos ningún incentivo para presionarte a nada.</p>
  <p>Suena bien?</p>
  <p>Entonces <a href="URL_DEL_CORREO">toca aquí</a> para ver los detalles y tocar el botón de agendar una llamada.</p>
  <p>-Marcos</p>
  <p>Enviado a %EMAIL%</p>
  <a href="https://libertextradingclub.vercel.app/unsubscribe?email=%EMAIL%" >Unsubscribe</a>
  <a href="https://libertextradingclub.vercel.app/video" class="button">Ver el video</a>
  </div>
  </div>
</body>
</html>
`
