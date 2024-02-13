const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    if (process.env.NODE_ENV === 'development') {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
        stack: err.stack
      });
    } else if (process.env.NODE_ENV === 'production') {
      if (err.isOperational) {
        res.status(err.statusCode).json({
          status: err.status,
          message: err.message
        });
      } else {
        // Log the error
        console.error('ERROR 💥', err);
  
        // Send generic message
        res.status(500).json({
          status: 'error',
          message: 'Something went wrong!'
        });
      }
    }
  };
  
  module.exports = errorHandler;
  