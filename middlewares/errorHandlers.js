// middleware que manjea errores en  nuestra api
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[ERROR] ${new Date().toISOString()} - ${statusCode} - ${message}`);

    if (err.stack){
        console.error(err.stack); //para mostrar mas info de lo que paso
    }

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        ...err(process.env.NODE_ENV === 'development' && { stack: err.stack }) // solo en desarrollo mostramos el stack trace
    });

};

module.exports = errorHandler;
// exportamos el middleware para usarlo en nuestra app
//hay que modificar el .env para que muestre el stack trace
