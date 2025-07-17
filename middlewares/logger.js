
// toda esta funcion esta para escuchar lo que ocurre en la aplicacion, como peticiones, respuestas, errores, etc.y el next se va a la siguiente funcion.
// se usa para registrar eventos de la aplicacion, como peticiones, respuestas y errores.
//! esto se muestra en la consola y es util para depurar y monitorear la aplicacion.
const LoggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();  //para saber cuando ocurre el evento un registro.

  console.log(`[${timestamp} ${req.method} ${req.url} - IP: ${req.ip}]`);

  const start = Date.now(); // Start time for response duration tracking

  res.on('finish', () => {
    const duration = Date.now() - start; // guradmos las constante date,now
    console.log(`[${timestamp}] Response: ${res.statusCode} - ${duration}ms`); //nos mostrara todo lo que ocurre ycuando
  });

  next(); //pasamos al siguiente middleware o ruta 
};

module.exports = LoggerMiddleware;
