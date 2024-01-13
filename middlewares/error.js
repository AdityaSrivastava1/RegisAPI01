class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// export const errorMiddleware = (err, req, res, next) => {
//   err.message = err.message || "Internal Server Error";
//   err.statusCode = err.statusCode || 500;

//   return res.status(err.statusCode).json({
//     success: false,
//     message: err.message,
//   });
// };

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'Production' ? null : err.stack,
  });
};




export default ErrorHandler;
