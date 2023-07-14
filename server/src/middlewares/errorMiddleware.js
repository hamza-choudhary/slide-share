import ErrorHandler from "../utils/errorHandler.js";

export const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  /**
   * handling mongoDB id error
   */
  if (err.name === "CastError") {
    const message = `resource not found. invalid ${err.path}`;
    err = new ErrorHandler( 400 ,message);
  }

  if (err.code === 11000) {
    const message = `duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(400,message);
  }

  /**
   * handling jwt token error
   */
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid`;
    err = new ErrorHandler(400,message);
  }
  if (err.name === "TokenExpireError") {
    const message = `Json web token is expired`;
    err = new ErrorHandler(400,message);
  }

  /**
   * sending response for the errors
   */
  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
};
